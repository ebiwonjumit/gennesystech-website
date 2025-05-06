import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactMessageSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body using Zod schema
      const contactData = contactMessageSchema.parse(req.body);
      
      // Store the contact message
      const savedMessage = await storage.createContactMessage(contactData);
      
      // Return success response
      res.status(201).json({
        message: "Contact message received successfully",
        id: savedMessage.id
      });
    } catch (error) {
      if (error instanceof ZodError) {
        // Handle validation errors
        res.status(400).json({
          message: "Validation error",
          errors: error.errors
        });
      } else {
        // Handle other errors
        console.error("Error processing contact form:", error);
        res.status(500).json({
          message: "Failed to process contact form submission"
        });
      }
    }
  });

  // Get all contact messages (for admin purposes)
  app.get("/api/contact", async (req, res) => {
    try {
      const messages = await storage.getAllContactMessages();
      res.json(messages);
    } catch (error) {
      console.error("Error retrieving contact messages:", error);
      res.status(500).json({
        message: "Failed to retrieve contact messages"
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
