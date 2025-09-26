// Knowledge Base Data Service
// This service handles all CRUD operations for the Knowledge Base content
// In a real implementation, this would connect to your backend API

export interface SubCategory {
  id: string;
  title: string;
  content: string;
  videoUrl?: string;
  lastModified: string;
  author: string;
}

export interface Category {
  id: string;
  title: string;
  description?: string;
  subcategories: SubCategory[];
  createdAt: string;
  lastModified: string;
}

interface KnowledgeBaseData {
  categories: Category[];
  version: string;
  lastSync: string;
}

class KnowledgeBaseService {
  private storageKey = 'orchire-kb-data';
  
  // Default data structure
  private defaultData: KnowledgeBaseData = {
    version: "1.0.0",
    lastSync: new Date().toISOString(),
    categories: [
      {
        id: "getting-started",
        title: "Getting Started",
        description: "Essential guides to get you up and running with OrcHire.ai",
        createdAt: new Date().toISOString(),
        lastModified: new Date().toISOString(),
        subcategories: [
          {
            id: "create-job",
            title: "Create a Job",
            author: "OrcHire Team",
            lastModified: new Date().toISOString(),
            content: `# Creating a Job

There are two main ways to create a job in OrcHire.ai:

## Create from Scratch
1. Navigate to the Jobs section
2. Click "Create New Job"
3. Fill in the job details manually
4. Set requirements and preferences
5. Configure AI agent settings

## Upload a Job Description
1. Go to Jobs > Create Job
2. Select "Upload JD" option
3. Upload your existing job description file
4. AI will parse and extract key information
5. Review and adjust as needed

The AI agents will automatically begin sourcing candidates once the job is published.`
          },
          {
            id: "setup-company",
            title: "Setup Company Profile",
            author: "OrcHire Team",
            lastModified: new Date().toISOString(),
            content: `# Company Profile Setup

Configure your company profile for optimal AI matching and candidate experience.

## Basic Information
- Company name and description
- Industry and size
- Location and remote work policies

## Culture & Values
- Company culture description
- Core values and mission
- Work environment preferences

## Hiring Preferences
- Preferred candidate sources
- Interview process configuration
- Assessment criteria setup`
          }
        ]
      },
      {
        id: "ai-agents",
        title: "AI Agents",
        description: "Comprehensive guides for all AI agents in the OrcHire.ai platform",
        createdAt: new Date().toISOString(),
        lastModified: new Date().toISOString(),
        subcategories: [
          {
            id: "sourcing-agent",
            title: "Candidate Sourcing Agent",
            author: "OrcHire Team",
            lastModified: new Date().toISOString(),
            content: `# Candidate Sourcing Agent

The AI agent that finds and evaluates potential candidates across multiple platforms.

## Capabilities
- Multi-platform candidate discovery
- Real-time profile analysis
- Skills and experience matching
- Contact information verification
- Engagement probability scoring

## Configuration
- Source platform selection
- Search criteria refinement
- Matching algorithm tuning
- Quality score thresholds
- Automated outreach settings`
          }
        ]
      },
      {
        id: "advanced-features",
        title: "Advanced Features",
        description: "Advanced functionality and enterprise features",
        createdAt: new Date().toISOString(),
        lastModified: new Date().toISOString(),
        subcategories: [
          {
            id: "api-integrations",
            title: "API Integrations",
            author: "OrcHire Team",
            lastModified: new Date().toISOString(),
            content: `# API Integrations

Connect OrcHire.ai with your existing technology stack.

## Available APIs
- Candidate management API
- Job posting API
- Analytics API
- Webhook notifications
- Data export API

## Integration Examples
- HRIS system connections
- Background check services
- Video interview platforms
- Assessment tool integrations
- Communication platforms`
          }
        ]
      }
    ]
  };

  // Load data from localStorage or return default
  loadData(): KnowledgeBaseData {
    try {
      const stored = localStorage.getItem(this.storageKey);
      if (stored) {
        const parsed = JSON.parse(stored);
        // Validate data structure
        if (parsed.categories && Array.isArray(parsed.categories)) {
          return parsed;
        }
      }
    } catch (error) {
      console.warn('Failed to load knowledge base data from localStorage:', error);
    }
    
    // Return default data and save it
    this.saveData(this.defaultData);
    return this.defaultData;
  }

  // Save data to localStorage
  saveData(data: KnowledgeBaseData): void {
    try {
      data.lastSync = new Date().toISOString();
      localStorage.setItem(this.storageKey, JSON.stringify(data));
    } catch (error) {
      console.error('Failed to save knowledge base data:', error);
      throw new Error('Failed to save data. Please try again.');
    }
  }

  // Category operations
  getCategories(): Category[] {
    const data = this.loadData();
    return data.categories;
  }

  addCategory(title: string, description?: string): Category {
    const newCategory: Category = {
      id: this.generateId(title),
      title,
      description,
      subcategories: [],
      createdAt: new Date().toISOString(),
      lastModified: new Date().toISOString()
    };

    const data = this.loadData();
    data.categories.push(newCategory);
    this.saveData(data);
    
    return newCategory;
  }

  updateCategory(categoryId: string, updates: Partial<Pick<Category, 'title' | 'description'>>): void {
    const data = this.loadData();
    const categoryIndex = data.categories.findIndex(cat => cat.id === categoryId);
    
    if (categoryIndex === -1) {
      throw new Error('Category not found');
    }

    data.categories[categoryIndex] = {
      ...data.categories[categoryIndex],
      ...updates,
      lastModified: new Date().toISOString()
    };

    this.saveData(data);
  }

  deleteCategory(categoryId: string): void {
    const data = this.loadData();
    data.categories = data.categories.filter(cat => cat.id !== categoryId);
    this.saveData(data);
  }

  // Subcategory operations
  addSubcategory(categoryId: string, title: string, content: string = '', author: string = 'Admin'): SubCategory {
    const newSubcategory: SubCategory = {
      id: this.generateId(title),
      title,
      content: content || `# ${title}\n\nAdd your content here...`,
      author,
      lastModified: new Date().toISOString()
    };

    const data = this.loadData();
    const category = data.categories.find(cat => cat.id === categoryId);
    
    if (!category) {
      throw new Error('Category not found');
    }

    category.subcategories.push(newSubcategory);
    category.lastModified = new Date().toISOString();
    this.saveData(data);
    
    return newSubcategory;
  }

  updateSubcategory(
    categoryId: string, 
    subcategoryId: string, 
    updates: Partial<Pick<SubCategory, 'title' | 'content' | 'videoUrl'>>,
    author: string = 'Admin'
  ): void {
    const data = this.loadData();
    const category = data.categories.find(cat => cat.id === categoryId);
    
    if (!category) {
      throw new Error('Category not found');
    }

    const subcategoryIndex = category.subcategories.findIndex(sub => sub.id === subcategoryId);
    if (subcategoryIndex === -1) {
      throw new Error('Subcategory not found');
    }

    category.subcategories[subcategoryIndex] = {
      ...category.subcategories[subcategoryIndex],
      ...updates,
      author,
      lastModified: new Date().toISOString()
    };

    category.lastModified = new Date().toISOString();
    this.saveData(data);
  }

  deleteSubcategory(categoryId: string, subcategoryId: string): void {
    const data = this.loadData();
    const category = data.categories.find(cat => cat.id === categoryId);
    
    if (!category) {
      throw new Error('Category not found');
    }

    category.subcategories = category.subcategories.filter(sub => sub.id !== subcategoryId);
    category.lastModified = new Date().toISOString();
    this.saveData(data);
  }

  // Search functionality
  searchContent(query: string): Array<{category: Category, subcategory: SubCategory}> {
    const data = this.loadData();
    const results: Array<{category: Category, subcategory: SubCategory}> = [];
    
    const searchTerm = query.toLowerCase();
    
    data.categories.forEach(category => {
      category.subcategories.forEach(subcategory => {
        if (
          subcategory.title.toLowerCase().includes(searchTerm) ||
          subcategory.content.toLowerCase().includes(searchTerm) ||
          category.title.toLowerCase().includes(searchTerm)
        ) {
          results.push({ category, subcategory });
        }
      });
    });

    return results;
  }

  // Statistics
  getStatistics() {
    const data = this.loadData();
    
    return {
      totalCategories: data.categories.length,
      totalSubcategories: data.categories.reduce((acc, cat) => acc + cat.subcategories.length, 0),
      totalArticles: data.categories.reduce((acc, cat) => acc + cat.subcategories.length, 0),
      lastModified: Math.max(...data.categories.map(cat => new Date(cat.lastModified).getTime())),
      recentArticles: data.categories
        .flatMap(cat => cat.subcategories.map(sub => ({ ...sub, categoryTitle: cat.title })))
        .sort((a, b) => new Date(b.lastModified).getTime() - new Date(a.lastModified).getTime())
        .slice(0, 5)
    };
  }

  // Export/Import functionality
  exportData(): string {
    const data = this.loadData();
    return JSON.stringify(data, null, 2);
  }

  importData(jsonData: string): void {
    try {
      const parsed = JSON.parse(jsonData);
      
      // Basic validation
      if (!parsed.categories || !Array.isArray(parsed.categories)) {
        throw new Error('Invalid data format');
      }

      // More thorough validation could be added here
      this.saveData(parsed);
    } catch (error) {
      throw new Error('Invalid JSON data or format');
    }
  }

  // Utility methods
  private generateId(title: string): string {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  // Backup functionality
  createBackup(): string {
    const data = this.loadData();
    const backup = {
      ...data,
      backupCreated: new Date().toISOString(),
      version: data.version
    };
    
    return JSON.stringify(backup, null, 2);
  }

  restoreFromBackup(backupData: string): void {
    try {
      const parsed = JSON.parse(backupData);
      
      // Validate backup format
      if (!parsed.categories) {
        throw new Error('Invalid backup format');
      }

      // Remove backup metadata
      const { backupCreated, ...cleanData } = parsed;
      
      this.saveData(cleanData);
    } catch (error) {
      throw new Error('Invalid backup file');
    }
  }
}

// Export singleton instance
export const knowledgeBaseService = new KnowledgeBaseService();

// Export types for use in components
export type { KnowledgeBaseData };