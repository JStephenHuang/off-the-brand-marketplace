import { Router, Request, Response } from "express";
import { isAuthenticated } from "../middlewares/is-authenticated";
import { Message } from "../models/message";

const router = Router();

router.get("/", isAuthenticated, async (req: Request, res: Response) => {
  const messages = await Message.find({
    buyer: req.user._id,
  }).populate({ path: "listingId" });

  return res.status(200).json(messages);
});

router.post("/", isAuthenticated, async (req: Request, res: Response) => {
  const { sellerId, listingId, body } = req.body;

  if (!sellerId)
    return res.status(400).json("ClientError: missing receiver id.");
  if (!listingId)
    return res.status(400).json("ClientError: missing product id.");
  if (!body) return res.status(400).json("ClientError: missing body.");

  if (body === "") return res.status(400).json("ClientError: empty body.");

  await Message.create({
    buyerId: req.user._id,
    sellerId: sellerId,
    listingId: listingId,
    body: body,
  });
});

export { router };
