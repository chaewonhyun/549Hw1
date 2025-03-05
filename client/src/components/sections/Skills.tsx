import { forwardRef } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const skills = {
  technical: [
    "SQL",
    "Python",
    "Tableau",
    "Power BI",
    "Microsoft Office",
    "Data Analysis",
    "Google Suite"
  ],
  soft: [
    "Critical Thinking",
    "Cross-functional Collaboration",
    "Problem-solving",
    "Communication",
    "Time Management"
  ]
};

const Skills = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} className="py-20 bg-background/50" id="skills">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Skills</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.technical.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium
                        hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.soft.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium
                        hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

Skills.displayName = "Skills";
export default Skills;
