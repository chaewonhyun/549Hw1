import { forwardRef } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { BriefcaseIcon } from "lucide-react";

const experiences = [
  {
    title: "Data Analyst Intern",
    company: "Costco IT",
    location: "Issaquah, WA",
    period: "Jan 2025 - Present",
    description: [
      "Conduct in-depth analysis of IAM task and incident trends across Costco warehouses and depots",
      "Collaborate with cross-functional teams to develop solutions that streamline identity and access management workflows"
    ]
  },
  // Add other experiences...
];

const Experience = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} className="py-20 bg-background/50" id="experience">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Experience</h2>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="mt-1">
                        <BriefcaseIcon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                        <p className="text-sm text-foreground/60 mb-4">{exp.location} | {exp.period}</p>
                        <ul className="list-disc list-inside space-y-2 text-foreground/80">
                          {exp.description.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
});

Experience.displayName = "Experience";
export default Experience;
