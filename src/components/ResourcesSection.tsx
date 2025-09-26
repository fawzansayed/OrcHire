import { BlogSystem } from "./BlogSystem";
import { LeadCaptureForm, NewsletterSignup } from "./LeadCapture";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Download, FileText, Video, Newspaper, ExternalLink, BookOpen } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export function ResourcesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const whitepapers = [
    {
      title: "The Autonomous Hiring Playbook",
      description: "Complete guide to implementing AI-first recruitment strategies and measuring success",
      type: "PDF Download",
      pages: 42,
      downloadCount: "2.3k+"
    },
    {
      title: "ROI of AI-Native Hiring: Enterprise Case Studies",
      description: "Real results from Fortune 500 implementations with detailed metrics and ROI analysis",
      type: "Research Report",
      pages: 28,
      downloadCount: "1.8k+"
    },
    {
      title: "Global Talent Shortage: The AI Solution",
      description: "How autonomous platforms are addressing worldwide talent crisis across industries",
      type: "Industry Report",
      pages: 35,
      downloadCount: "3.1k+"
    }
  ];

  const media = [
    {
      title: "TechCrunch: OrcHire Raises $15M for AI-Native Hiring Revolution",
      source: "TechCrunch",
      date: "Dec 15, 2024",
      type: "Funding News",
      url: "#"
    },
    {
      title: "Forbes: The Future of Recruitment is Autonomous",
      source: "Forbes",
      date: "Nov 28, 2024",
      type: "Industry Analysis",
      url: "#"
    },
    {
      title: "VentureBeat: How AI is Revolutionizing Talent Acquisition",
      source: "VentureBeat",
      date: "Oct 20, 2024",
      type: "Technology Review",
      url: "#"
    },
    {
      title: "HR Executive: OrcHire Named 'Most Innovative HR Tech Platform'",
      source: "HR Executive",
      date: "Sep 15, 2024",
      type: "Award",
      url: "#"
    }
  ];

  const videos = [
    {
      title: "OrcHire Demo: See Autonomous Hiring in Action",
      duration: "12:30",
      views: "15.2k",
      thumbnail: "bg-gradient-to-br from-blue-500 to-purple-500"
    },
    {
      title: "Webinar: The Future of AI in Recruitment",
      duration: "45:00",
      views: "8.7k",
      thumbnail: "bg-gradient-to-br from-purple-500 to-teal-500"
    },
    {
      title: "Customer Success Story: How LivSpace 10x Their Hiring",
      duration: "8:45",
      views: "12.1k",
      thumbnail: "bg-gradient-to-br from-teal-500 to-blue-500"
    }
  ];

  return (
    <section className="py-10 px-6 relative overflow-hidden" ref={ref}>
      {/* Premium background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/20 to-purple-50/20" />
        <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Compact header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center space-x-3 bg-white/60 backdrop-blur-xl px-6 py-3 rounded-full mb-4 border border-white/40 shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-gray-800">Resources & Insights</span>
          </motion.div>
        </motion.div>

        {/* Blog System */}
        <BlogSystem />

        {/* Compact Whitepapers & Research */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold mb-2">Research & Whitepapers</h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm">
              Deep dive into the data, trends, and strategies shaping the future of hiring
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            {whitepapers.map((paper, index) => (
              <motion.div
                key={paper.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -3 }}
              >
                <div className="bg-white/60 backdrop-blur-xl p-5 rounded-2xl border border-white/40 shadow-lg hover:bg-white/70 transition-all duration-300 h-full">
                  <div className="flex items-start mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg mr-3 flex items-center justify-center flex-shrink-0 shadow-md">
                      <Download className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <Badge variant="outline" className="mb-2 text-xs">
                        {paper.type}
                      </Badge>
                      <h4 className="font-semibold mb-1 line-clamp-2 text-sm">{paper.title}</h4>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-xs mb-3 line-clamp-3 leading-relaxed">{paper.description}</p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <span>{paper.pages} pages</span>
                    <span>{paper.downloadCount} downloads</span>
                  </div>

                  <LeadCaptureForm 
                    formType="whitepaper" 
                    trigger={
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 text-sm py-2">
                        Download Free
                      </Button>
                    }
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Compact Videos */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold mb-2">Videos & Webinars</h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm">
              Watch demos, customer stories, and expert insights on autonomous hiring
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {videos.map((video, index) => (
              <motion.div
                key={video.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -3 }}
              >
                <div className="bg-white/60 backdrop-blur-xl rounded-2xl border border-white/40 shadow-lg hover:bg-white/70 transition-all duration-300 overflow-hidden cursor-pointer">
                  <div className={`h-32 ${video.thumbnail} relative flex items-center justify-center`}>
                    <motion.div
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Video className="w-6 h-6 text-white ml-1" />
                    </motion.div>
                    <div className="absolute bottom-2 right-2 bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h4 className="font-semibold mb-2 line-clamp-2 text-sm">{video.title}</h4>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{video.views} views</span>
                      <span>Watch Now →</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Compact Press & Media */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold mb-2">Press & Media Coverage</h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm">
              See what industry leaders and media are saying about OrcHire
            </p>
          </div>

          <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-white/40 shadow-lg">
            <div className="grid md:grid-cols-2 gap-3">
              {media.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="bg-white/50 backdrop-blur-sm p-3 rounded-lg border border-white/30 hover:bg-white/70 transition-all duration-300 cursor-pointer">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start flex-1">
                        <div className="w-8 h-8 bg-gradient-to-br from-gray-500 to-gray-600 rounded-lg mr-3 flex items-center justify-center flex-shrink-0">
                          <Newspaper className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <Badge variant="outline" className="text-xs">
                              {item.type}
                            </Badge>
                          </div>
                          <h4 className="font-semibold text-sm mb-1 line-clamp-2">{item.title}</h4>
                          <p className="text-gray-600 text-xs">{item.source} • {item.date}</p>
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400 ml-2 flex-shrink-0" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-4">
              <Button variant="outline" className="text-sm">
                View All Press Coverage
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <NewsletterSignup />
        </motion.div>
      </div>
    </section>
  );
}