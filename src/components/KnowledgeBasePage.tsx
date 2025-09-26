import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { 
  Search, 
  Book, 
  FileText, 
  Settings, 
  ChevronRight, 
  Circle,
  Square,
  Triangle,
  Hexagon,
  Diamond,
  Octagon
} from "lucide-react";
import { knowledgeBaseService, type Category, type SubCategory } from "./KnowledgeBaseService";
import { isAdmin } from "./AdminAuth";

interface KnowledgeBasePageProps {
  onNavigate?: (page: string) => void;
}

// Premium liquid glass icon component
const LiquidGlassIcon = ({ 
  Icon, 
  size = "w-5 h-5", 
  iconColor = "text-[#0C8EFF]" 
}: { 
  Icon: any; 
  size?: string; 
  iconColor?: string; 
}) => (
  <div className="relative group">
    <div className="absolute inset-0 bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-lg border theme-borders"></div>
    <div className="relative w-8 h-8 flex items-center justify-center">
      <Icon className={`${size} ${iconColor}`} />
    </div>
  </div>
);

export function KnowledgeBasePage({ onNavigate }: KnowledgeBasePageProps = {}) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Geometric icons for different levels
  const categoryIcons = [Circle, Square, Triangle, Hexagon, Diamond, Octagon];

  useEffect(() => {
    const loadedCategories = knowledgeBaseService.getCategories();
    setCategories(loadedCategories);
    
    // Expand all categories by default
    setExpandedCategories(loadedCategories.map(cat => cat.id));
    
    // Select first category and subcategory by default
    if (loadedCategories.length > 0) {
      setSelectedCategory(loadedCategories[0].id);
      if (loadedCategories[0].subcategories.length > 0) {
        setSelectedSubcategory(loadedCategories[0].subcategories[0].id);
      }
    }
  }, []);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const selectSubcategory = (categoryId: string, subcategoryId: string) => {
    setSelectedCategory(categoryId);
    setSelectedSubcategory(subcategoryId);
  };

  const selectedContent = categories
    .find(cat => cat.id === selectedCategory)
    ?.subcategories.find(sub => sub.id === selectedSubcategory);

  const filteredCategories = categories.map(category => ({
    ...category,
    subcategories: category.subcategories.filter(sub =>
      searchQuery === "" ||
      sub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sub.content.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => 
    searchQuery === "" || 
    category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.subcategories.length > 0
  );

  return (
    <section className="min-h-screen bg-background">
      <div className="flex h-screen">
        {/* Left Sidebar - Navigation */}
        <div className="w-80 bg-card/30 backdrop-blur-xl border-r theme-borders overflow-y-auto">
          {/* Header */}
          <div className="p-6 border-b theme-borders">
            <div className="flex items-center gap-3 mb-6">
              <LiquidGlassIcon Icon={Book} iconColor="text-[#0C8EFF]" />
              <div>
                <h1 className="text-xl font-bold tracking-tight">Knowledge Base</h1>
                <p className="text-sm text-muted-foreground font-light">
                  {categories.length} categories
                </p>
              </div>
            </div>

            {/* Search */}
    <div className="flex items-center bg-background/50 backdrop-blur-sm border theme-borders rounded-lg px-3 py-2.5 focus-within:ring-2 focus-within:ring-[#0C8EFF]/20 transition-all duration-200">
  <Search className="w-4 h-4 text-muted-foreground mr-3" />
  <input
    type="text"
    placeholder="Search knowledge base..."
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    className="w-full bg-transparent focus:outline-none font-light placeholder:text-muted-foreground dark:placeholder:text-gray-400"
  />
</div>

            {/* Admin Access */}
            {isAdmin() && onNavigate && (
              <motion.button
                onClick={() => onNavigate('knowledge-base-cms')}
                className="w-full mt-4 flex items-center gap-3 px-3 py-2.5 bg-[#0C8EFF]/10 text-[#0C8EFF] rounded-lg hover:bg-[#0C8EFF]/20 transition-all duration-200"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <LiquidGlassIcon Icon={Settings} size="w-4 h-4" iconColor="text-[#0C8EFF]" />
                <span className="font-medium">Manage Content</span>
              </motion.button>
            )}
          </div>

          {/* Navigation Tree */}
          <div className="p-4">
            {filteredCategories.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground font-light">No results found</p>
              </div>
            ) : (
              <div className="space-y-1">
                {filteredCategories.map((category, categoryIndex) => {
                  const CategoryIcon = categoryIcons[categoryIndex % categoryIcons.length];
                  const isExpanded = expandedCategories.includes(category.id);
                  
                  return (
                    <div key={category.id}>
                      {/* Level 1: Category */}
                      <motion.button
                        onClick={() => toggleCategory(category.id)}
                        className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-background/40 transition-all duration-200 group"
                        whileHover={{ x: 2 }}
                      >
                        <LiquidGlassIcon 
                          Icon={CategoryIcon} 
                          size="w-4 h-4" 
                          iconColor="text-[#0C8EFF]" 
                        />
                        <span className="flex-1 text-left font-semibold text-sm tracking-tight">
                          {category.title}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-muted-foreground bg-background/60 px-2 py-0.5 rounded-full font-light">
                            {category.subcategories.length}
                          </span>
                          <motion.div
                            animate={{ rotate: isExpanded ? 90 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                          </motion.div>
                        </div>
                      </motion.button>

                      {/* Level 2: Subcategories */}
                      <motion.div
                        initial={false}
                        animate={{
                          height: isExpanded ? "auto" : 0,
                          opacity: isExpanded ? 1 : 0,
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="ml-11 mt-1 space-y-1">
                          {category.subcategories.map((subcategory) => (
                            <motion.button
                              key={subcategory.id}
                              onClick={() => selectSubcategory(category.id, subcategory.id)}
                              className={`w-full text-left p-2.5 rounded-lg transition-all duration-200 ${
                                selectedCategory === category.id && selectedSubcategory === subcategory.id
                                  ? 'bg-[#0C8EFF]/10 text-[#0C8EFF] border-l-2 theme-borders'
                                  : 'hover:bg-background/40 text-muted-foreground hover:text-foreground'
                              }`}
                              whileHover={{ x: selectedCategory === category.id && selectedSubcategory === subcategory.id ? 0 : 4 }}
                            >
                              <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-current rounded-full opacity-60" />
                                <span className="text-sm font-medium tracking-tight">{subcategory.title}</span>
                              </div>
                            </motion.button>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Right Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="bg-card/20 backdrop-blur-xl border-b theme-borders p-8">
            <div className="flex items-center gap-4">
              <LiquidGlassIcon Icon={FileText} iconColor="text-[#0C8EFF]" />
              <div>
                <h2 className="text-3xl font-bold tracking-tight">
                  {selectedContent?.title || "Welcome to Knowledge Base"}
                </h2>
                <p className="text-muted-foreground font-light mt-1">
                  {selectedContent ? "Documentation" : "Select an article from the sidebar to get started"}
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-8">
              {!selectedContent ? (
                /* Welcome State */
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="max-w-2xl mx-auto text-center py-20"
                >
                  <div className="mb-8">
                    <LiquidGlassIcon 
                      Icon={Book} 
                      size="w-16 h-16" 
                      iconColor="text-[#0C8EFF]" 
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 tracking-tight">
                    Comprehensive Documentation
                  </h3>
                  <p className="text-muted-foreground font-light text-lg leading-relaxed mb-8">
                    Explore our extensive knowledge base to find answers, guides, and detailed information about our platform.
                  </p>
                  
                  {/* Quick Stats */}
                  <div className="grid grid-cols-3 gap-6 max-w-md mx-auto">
                    {[
                      { label: "Articles", value: "150+" },
                      { label: "Categories", value: categories.length.toString() },
                      { label: "Updates", value: "Weekly" }
                    ].map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="text-center"
                      >
                        <div className="text-2xl font-bold text-[#0C8EFF] mb-1">{stat.value}</div>
                        <div className="text-sm text-muted-foreground font-light">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ) : (
                /* Article Content */
                <motion.div
                  key={selectedContent.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="max-w-4xl mx-auto"
                >
                  <article className="bg-card/30 backdrop-blur-xl border theme-borders rounded-2xl overflow-hidden">
                    {/* Article Header */}
                    <div className="p-8 border-b theme-borders">
                      <h1 className="text-4xl font-bold mb-4 tracking-tight leading-tight">
                        {selectedContent.title}
                      </h1>
                      <div className="flex items-center gap-6 text-sm text-muted-foreground font-light">
                        <span>Last updated: {selectedContent.lastModified}</span>
                        <span>•</span>
                        <span>5 min read</span>
                        <span>•</span>
                        <span className="text-green-500">✓ Verified</span>
                      </div>
                    </div>

                    {/* Article Body */}
                    <div className="p-8">
                      <div className="prose prose-lg max-w-none">
                        <div className="text-foreground font-light leading-relaxed whitespace-pre-wrap">
                          {selectedContent.content}
                        </div>
                      </div>
                    </div>

                    {/* Article Footer */}
                    <div className="p-8 border-t theme-borders bg-card/20">
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-muted-foreground font-light">
                          Was this article helpful?
                        </p>
                        <div className="flex items-center gap-3">
                          <button className="px-4 py-2 bg-background/60 hover:bg-background/80 rounded-lg transition-colors duration-200 text-sm font-medium">
                            👍 Yes
                          </button>
                          <button className="px-4 py-2 bg-background/60 hover:bg-background/80 rounded-lg transition-colors duration-200 text-sm font-medium">
                            👎 No
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
