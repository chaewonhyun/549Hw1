import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import VideoBackground from "@/components/layout/VideoBackground";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <VideoBackground />
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
              Hello, I'm Chae Hyun
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-foreground">
              Data Analyst & Information Systems Professional
            </p>
            <p className="text-lg mb-12 text-foreground/80">
              Passionate about leveraging data and technology to drive business transformation
            </p>
            <Link href="/portfolio">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 group"
              >
                View My Portfolio
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}