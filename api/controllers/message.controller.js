import { errorHandler } from "../utils/error.js";
import User from "../models/user.model.js";
import Message from "../models/message.model.js";
// import supabase from "../../client/src/supabaseClient";

export const getUsersForSidebar = async (req, res, next) => {
  try {
    const loggedInUserId = req.user._id;
    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");
  } catch (error) {
    next(errorHandler(500, "Internal server error"));
  }
};

export const getMessages = async (req, res, next) => {
  try {
    const { id: userToChatId } = req.params; //rename id //receiver id
    const myId = req.user._id; //current logged in user id

    const messages = await Message.find({
      $or: [
        { senderId: myId, receiverId: userToChatId },
        { senderId: userToChatId, receiverId: myId },
      ],
    });
    res.status(200).json(messages);
  } catch (error) {
    next(errorHandler(500, "Internal server error"));
  }
};

export const sendMessage = async (req, res, next) => {
  try {
    const { text, image } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user.id;

    // let imageUrl;
    // if (image) {
    //   // upload image to supabase
    //   const imageName = `${new Date().getTime()}-${file.name}`;
    //   const { data, error } = await supabase.storage
    //     .from("message-images")
    //     .upload(imageName, image);
    //   const { data: imageUrl } = supabase.storage
    //     .from("message-images")
    //     .getPublicUrl(data.path);

    // }
    const newMessage = new Message({
      senderId,
      text,
      image: imageUrl,
    });
    await newMessage.save();

    // realtime functionality => socket.io

    res.status(201).json(newMessage);
  } catch (error) {
    next(error);
  }
};
