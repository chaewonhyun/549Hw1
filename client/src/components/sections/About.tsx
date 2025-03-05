import { forwardRef } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const About = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} className="py-20 bg-background" id="about">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">About Me</h2>

          <Card>
            <CardContent className="p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/40 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                  <div className="relative">
                    <img
                      src="/images/profile.png"
                      alt="Chae Hyun"
                      className="rounded-lg shadow-lg w-full transform transition duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">
                    Passionate about Data & Technology
                  </h3>
                  <div className="space-y-4 text-foreground/80">
                    <p>
                      I am a motivated graduate student pursuing a Master of Science in Information Systems 
                      with a passion for leveraging technology to solve complex business problems.
                    </p>
                    <p>
                      With experience in consulting, data analysis, digital transformation, and project 
                      management, I have a proven ability to deliver innovative solutions and collaborate 
                      across functional teams.
                    </p>
                    <p>
                      I am adept at synthesizing insights from data to drive decision-making, crafting 
                      creative strategies, and implementing solutions that align with organizational goals.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
});

About.displayName = "About";
export default About;