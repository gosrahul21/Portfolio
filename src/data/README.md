# Portfolio Data Configuration

This directory contains the centralized data configuration for your portfolio website. All the essential information like personal details, projects, skills, and contact information is stored in `portfolio-data.json` and can be easily edited without touching the code.

## Files

- `portfolio-data.json` - Main data file containing all portfolio information
- `README.md` - This documentation file

## How to Edit

### 1. Personal Information
Edit the `personal` section to update your name, title, description, and other personal details:

```json
{
  "personal": {
    "name": "Your Name",
    "title": "Your Title",
    "tagline": "Your Tagline",
    "description": "Your description here...",
    "welcomeMessage": "Your welcome message",
    "cvDownloadUrl": "path/to/your/cv.pdf",
    "avatar": "path/to/your/avatar.jpg"
  }
}
```

### 2. Skills
Update your technical skills in the `skills.list` array:

```json
{
  "skills": {
    "list": [
      {
        "name": "Skill Name",
        "level": 95,
        "color": "#hexcolor"
      }
    ]
  }
}
```

- `level`: Proficiency percentage (0-100)
- `color`: Hex color code for the skill bar

### 3. Projects
Add, remove, or modify projects in the `projects.list` array:

```json
{
  "projects": {
    "list": [
      {
        "title": "Project Title",
        "description": "Project description...",
        "image": "image-url-or-path",
        "tech": ["React", "TypeScript", "Node.js"],
        "liveUrl": "live-project-url",
        "githubUrl": "github-repository-url",
        "featured": true
      }
    ]
  }
}
```

- `featured`: Set to `true` to highlight the project with a star badge
- `tech`: Array of technologies used in the project
- `image`: URL or local path to project screenshot

### 4. Contact Information
Update your contact details and social links:

```json
{
  "contact": {
    "ctaButtons": {
      "primary": {
        "text": "Get In Touch",
        "action": "email",
        "email": "your-email@example.com"
      }
    },
    "socialLinks": [
      {
        "platform": "LinkedIn",
        "url": "your-linkedin-url",
        "icon": "Linkedin",
        "label": "LinkedIn"
      }
    ]
  }
}
```

### 5. Theme Configuration
Customize colors and default settings:

```json
{
  "theme": {
    "colors": {
      "primary": {
        "blue": "#3b82f6",
        "purple": "#8b5cf6"
      }
    },
    "defaults": {
      "threeEnabled": true,
      "motionIntensity": 1,
      "darkMode": true
    }
  }
}
```

### 6. SEO Settings
Update meta information for better search engine optimization:

```json
{
  "seo": {
    "title": "Your Name - Your Title Portfolio",
    "description": "Your portfolio description for search engines",
    "keywords": ["keyword1", "keyword2", "keyword3"],
    "author": "Your Name"
  }
}
```

## Usage in Components

The data is automatically loaded and can be accessed using utility functions:

```typescript
import { 
  getPersonalInfo, 
  getProjectsSection, 
  getSkillsSection,
  filterProjects 
} from '../utils/portfolio-data';

// Get personal info
const personalInfo = getPersonalInfo();

// Get all projects
const projects = getProjectsSection().list;

// Filter projects
const filteredProjects = filterProjects(['React'], 'AI');
```

## Benefits

1. **Easy Maintenance**: Update content without touching React components
2. **Centralized Data**: All portfolio information in one place
3. **Type Safety**: Full TypeScript support with interfaces
4. **Reusable**: Data can be used across multiple components
5. **Version Control**: Track content changes separately from code changes

## Tips

- Keep image URLs consistent (either all local or all external)
- Use descriptive project descriptions (150-200 characters recommended)
- Update skills levels regularly as you improve
- Test all links after making changes
- Backup the JSON file before major edits

## File Structure

```
src/
├── data/
│   ├── portfolio-data.json    # Main data file
│   └── README.md             # This documentation
├── types/
│   └── portfolio-data.ts     # TypeScript interfaces
└── utils/
    └── portfolio-data.ts     # Utility functions
```

## Need Help?

If you need to make changes to the data structure or add new fields, update the corresponding TypeScript interfaces in `types/portfolio-data.ts` to maintain type safety. 