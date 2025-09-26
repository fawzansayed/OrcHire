import { useState, useEffect } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { 
  Search, 
  Filter, 
  Calendar, 
  User, 
  ArrowRight, 
  BookOpen, 
  TrendingUp,
  Brain,
  Globe,
  Zap
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorRole: string;
  publishDate: string;
  readTime: string;
  category: string;
  tags: string[];
  featured: boolean;
  image?: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The End of ATS Era: Why Traditional Systems Are Failing",
    excerpt: "How legacy applicant tracking systems became barriers to modern hiring and what's replacing them in the AI-first world.",
    content: `The hiring landscape is undergoing its most significant transformation since the advent of online job boards. Traditional Applicant Tracking Systems (ATS), once revolutionary, have become the very bottlenecks they were designed to eliminate.

## The Current State of ATS

Most enterprises today rely on ATS platforms built in the early 2000s. These systems were designed for a different era-one where resumes were king and hiring was a reactive process. But today's talent market demands something fundamentally different.

### The Problems We See:

1. **Database Dependency**: Traditional ATS rely on candidates actively applying, creating a limited pool
2. **Resume Parsing Failures**: Critical information lost in translation
3. **Manual Workflows**: Recruiters spending 80% of time on administrative tasks
4. **Fragmented Experience**: Multiple tools for sourcing, screening, and managing candidates

## The AI-Native Alternative

OrcHire represents a paradigm shift from reactive to proactive hiring. Instead of waiting for applications, our AI continuously discovers and engages talent that matches your specific needs.

### Key Differences:

- **Proactive Discovery**: AI finds candidates before they even think about switching jobs
- **DNA Matching**: Beyond skills-cultural fit and growth potential
- **Autonomous Workflows**: From prompt to offer with minimal human intervention
- **Unified Experience**: One platform for the entire hiring journey

The future of hiring isn't about better ATS-it's about transcending the ATS paradigm entirely.`,
    author: "Deepak Sharma",
    authorRole: "CEO & Co-founder",
    publishDate: "2024-01-15",
    readTime: "8 min read",
    category: "Thought Leadership",
    tags: ["ATS", "Future of Work", "AI"],
    featured: true
  },
  {
    id: "2",
    title: "Why Resumes Are Dead (And What's Replacing Them)",
    excerpt: "The shift from document-based to AI-native talent discovery is reshaping how we identify and evaluate candidates.",
    content: `The resume-that one-page summary of professional history-has been the cornerstone of hiring for over a century. But in an AI-first world, this static document is becoming increasingly obsolete.

## The Resume Problem

Resumes were designed for a linear career world that no longer exists. Today's professionals have diverse backgrounds, cross-functional skills, and non-traditional career paths that don't fit neatly into a template.

### Why Resumes Fall Short:

- **Static Nature**: Can't capture real-time skills and interests
- **Format Bias**: Design and writing skills often matter more than qualifications
- **Limited Context**: No insight into cultural fit or growth potential
- **Parsing Issues**: ATS systems regularly miss critical information

## The AI-Native Alternative: Digital DNA

At OrcHire, we've moved beyond resumes to what we call "Digital DNA"-a comprehensive, dynamic profile that captures:

### Professional Genome:
- Real-time skill validation
- Project-based achievements
- Peer endorsements and collaboration patterns
- Learning velocity and adaptability metrics

### Cultural Markers:
- Communication style analysis
- Value alignment indicators
- Team dynamics preferences
- Growth mindset signals

This approach doesn't just match skills-it predicts success and cultural fit with unprecedented accuracy.`,
    author: "Vishal Patel",
    authorRole: "CTO & Co-founder",
    publishDate: "2024-01-10",
    readTime: "6 min read",
    category: "Technology",
    tags: ["Resumes", "AI", "Digital DNA"],
    featured: true
  },
  {
    id: "3",
    title: "AI-native vs ATS-add-on: The Architecture That Matters",
    excerpt: "Why bolting AI onto old systems doesn't work at scale and what true AI-native architecture looks like.",
    content: `As AI transforms hiring, we're seeing two distinct approaches emerge: retrofitting existing ATS with AI features versus building AI-native platforms from the ground up. The architectural differences are profound.

## The Add-on Approach: Limitations

Many traditional ATS providers are adding AI as a feature layer. This approach faces fundamental constraints:

### Structural Limitations:
- **Database Dependency**: Still reliant on resume databases
- **Batch Processing**: AI runs on static data, not real-time insights
- **Integration Complexity**: Multiple vendors, fragmented experience
- **Scale Constraints**: Legacy infrastructure limits AI capabilities

## The AI-Native Advantage

True AI-native platforms like OrcHire are architected differently from day one:

### Core Principles:
- **Real-time Processing**: Continuous learning and adaptation
- **Unified Intelligence**: Single AI brain orchestrating all functions
- **Scalable Architecture**: Built for global enterprise deployment
- **Human-AI Collaboration**: Designed for recruiter workflows

The difference isn't just technical - it's strategic. AI-native platforms don't just automate existing processes; they enable entirely new ways of thinking about talent acquisition.`,
    author: "Rubinder Kaur",
    authorRole: "VP People & Co-founder",
    publishDate: "2024-01-05",
    readTime: "10 min read",
    category: "Technology",
    tags: ["AI Architecture", "Platform Design", "Enterprise"],
    featured: false
  },
  {
    id: "4",
    title: "The Global Talent Shortage: An AI Solution",
    excerpt: "How autonomous hiring platforms are addressing the worldwide talent crisis across BFSI, Tech, and Media sectors.",
    content: `The global talent shortage has reached crisis levels. With 40% more open positions than available candidates in key sectors, traditional hiring methods are no longer sufficient.

## The Scale of the Challenge

### By the Numbers:
- 85% of recruiters report increased time-to-hire
- 60% struggle with candidate quality
- 70% face budget constraints while hiring pressure increases
- Only 12% of companies meet their hiring targets consistently

## AI as the Great Equalizer

Autonomous hiring platforms democratize access to global talent by:

### Breaking Geographic Barriers:
- Real-time translation and cultural adaptation
- Timezone-agnostic screening processes
- Global compliance and regulatory handling
- Remote work capability assessment

### Scaling Human Intelligence:
- One recruiter can manage 10x more candidates
- 24/7 candidate engagement and screening
- Predictive quality scoring
- Automated reference and background checks

The future belongs to organizations that can harness global talent pools efficiently. AI isn't just an advantage-it's becoming a necessity.`,
    author: "Sarah Johnson",
    authorRole: "Advisory Board",
    publishDate: "2024-01-01",
    readTime: "7 min read",
    category: "Global Trends",
    tags: ["Talent Shortage", "Global Hiring", "Remote Work"],
    featured: false
  }
];

const categories = ["All", "Thought Leadership", "Technology", "Global Trends", "Future of Work"];
const authors = [...new Set(blogPosts.map(post => post.author))];

export function BlogSystem() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedAuthor, setSelectedAuthor] = useState("All");
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    let filtered = blogPosts;

    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (selectedCategory !== "All") {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    if (selectedAuthor !== "All") {
      filtered = filtered.filter(post => post.author === selectedAuthor);
    }

    setFilteredPosts(filtered);
  }, [searchTerm, selectedCategory, selectedAuthor]);

  const featuredPosts = blogPosts.filter(post => post.featured);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Thought Leadership": return Brain;
      case "Technology": return Zap;
      case "Global Trends": return Globe;
      default: return BookOpen;
    }
  };

  return (
    <div className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Thought <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">Leadership</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Insights and research shaping the future of hiring
          </p>
        </motion.div>

        {/* Featured Posts */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold mb-8">Featured Articles</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => {
              const CategoryIcon = getCategoryIcon(post.category);
              return (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer h-full">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg mr-3 flex items-center justify-center">
                        <CategoryIcon className="w-4 h-4 text-white" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {post.category}
                      </Badge>
                    </div>
                    
                    <h4 className="text-xl font-semibold mb-3 line-clamp-2">{post.title}</h4>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(post.publishDate).toLocaleDateString()}
                        </div>
                      </div>
                      <span>{post.readTime}</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map(tag => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="ghost" 
                          className="w-full justify-between p-0 h-auto text-purple-600 hover:text-purple-700"
                          onClick={() => setSelectedPost(post)}
                        >
                          Read Full Article
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <div className="flex items-center mb-2">
                            <Badge variant="secondary" className="mr-2">
                              {post.category}
                            </Badge>
                            <span className="text-sm text-gray-500">{post.readTime}</span>
                          </div>
                          <DialogTitle className="text-2xl font-bold text-left">
                            {post.title}
                          </DialogTitle>
                          <div className="flex items-center space-x-4 text-sm text-gray-500 mt-2">
                            <div className="flex items-center">
                              <User className="w-4 h-4 mr-1" />
                              {post.author} • {post.authorRole}
                            </div>
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {new Date(post.publishDate).toLocaleDateString()}
                            </div>
                          </div>
                        </DialogHeader>
                        <div className="prose max-w-none mt-6">
                          <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                            {post.content}
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t">
                          {post.tags.map(tag => (
                            <Badge key={tag} variant="outline">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </DialogContent>
                    </Dialog>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
              <TabsList className="grid grid-cols-5 w-full md:w-auto">
                {categories.map(category => (
                  <TabsTrigger key={category} value={category} className="text-xs">
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </motion.div>

        {/* All Posts Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedCategory}-${searchTerm}`}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredPosts.map((post, index) => {
              const CategoryIcon = getCategoryIcon(post.category);
              return (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="p-6 border-0 shadow-md hover:shadow-lg transition-all duration-300 h-full cursor-pointer">
                    <div className="flex items-center mb-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-md mr-2 flex items-center justify-center">
                        <CategoryIcon className="w-3 h-3 text-white" />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {post.category}
                      </Badge>
                    </div>
                    
                    <h4 className="font-semibold mb-2 line-clamp-2">{post.title}</h4>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{post.author}</span>
                      <span>{post.readTime}</span>
                    </div>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="w-full mt-4 text-purple-600 hover:text-purple-700"
                          onClick={() => setSelectedPost(post)}
                        >
                          Read More →
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <div className="flex items-center mb-2">
                            <Badge variant="secondary" className="mr-2">
                              {post.category}
                            </Badge>
                            <span className="text-sm text-gray-500">{post.readTime}</span>
                          </div>
                          <DialogTitle className="text-2xl font-bold text-left">
                            {post.title}
                          </DialogTitle>
                          <div className="flex items-center space-x-4 text-sm text-gray-500 mt-2">
                            <div className="flex items-center">
                              <User className="w-4 h-4 mr-1" />
                              {post.author} • {post.authorRole}
                            </div>
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {new Date(post.publishDate).toLocaleDateString()}
                            </div>
                          </div>
                        </DialogHeader>
                        <div className="prose max-w-none mt-6">
                          <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                            {post.content}
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t">
                          {post.tags.map(tag => (
                            <Badge key={tag} variant="outline">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </DialogContent>
                    </Dialog>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {filteredPosts.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-gray-500 mb-4">
              <BookOpen className="w-12 h-12 mx-auto mb-4" />
              <p>No articles found matching your search criteria.</p>
              <p className="text-sm mt-2">Try adjusting your search terms or filters.</p>
            </div>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
                setSelectedAuthor("All");
              }}
            >
              Clear Filters
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}