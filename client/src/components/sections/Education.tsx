import { forwardRef } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCapIcon } from "lucide-react";

const education = [
  {
    school: "University of Washington, Michael G. Foster School of Business",
    degree: "Master of Science in Information Systems",
    period: "Jun 2024 – Jun 2025",
    gpa: "3.7/4.0"
  },
  {
    school: "University of Washington, Michael G. Foster School of Business",
    degree: "Bachelor of Arts in Business Administration",
    period: "Sep 2020 – Jun 2024",
    major: "Information Systems & Marketing",
    gpa: "3.7/4.0"
  }
];

const Education = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} className="py-20 bg-background" id="education">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Education</h2>

          <div className="space-y-6">
            {education.map((edu, index) => (
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
                        <GraduationCapIcon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">{edu.school}</h3>
                        <p className="text-primary font-medium">{edu.degree}</p>
                        <p className="text-sm text-foreground/60">{edu.period}</p>
                        {edu.major && (
                          <p className="text-foreground/80">Major: {edu.major}</p>
                        )}
                        <p className="text-foreground/80">GPA: {edu.gpa}</p>
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

Education.displayName = "Education";
export default Education;
