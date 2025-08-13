#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current file directory for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the portfolio data file
const dataPath = path.join(__dirname, '../src/data/portfolio-data.json');

function validatePortfolioData() {
  try {
    console.log('🔍 Validating portfolio data...');
    
    // Check if file exists
    if (!fs.existsSync(dataPath)) {
      console.error('❌ Portfolio data file not found at:', dataPath);
      process.exit(1);
    }
    
    // Read and parse JSON
    const rawData = fs.readFileSync(dataPath, 'utf8');
    const data = JSON.parse(rawData);
    
    console.log('✅ JSON syntax is valid');
    
    // Basic structure validation
    const requiredSections = [
      'personal', 'navigation', 'hero', 'skills', 
      'projects', 'contact', 'theme', 'seo'
    ];
    
    for (const section of requiredSections) {
      if (!data[section]) {
        console.error(`❌ Missing required section: ${section}`);
        process.exit(1);
      }
    }
    
    console.log('✅ All required sections are present');
    
    // Validate personal info
    if (!data.personal.name || !data.personal.title) {
      console.error('❌ Personal section missing required fields (name, title)');
      process.exit(1);
    }
    
    // Validate skills
    if (!Array.isArray(data.skills.list) || data.skills.list.length === 0) {
      console.error('❌ Skills section must have a non-empty list array');
      process.exit(1);
    }
    
    // Validate projects
    if (!Array.isArray(data.projects.list) || data.projects.list.length === 0) {
      console.error('❌ Projects section must have a non-empty list array');
      process.exit(1);
    }
    
    // Validate contact info
    if (!data.contact.socialLinks || !Array.isArray(data.contact.socialLinks)) {
      console.error('❌ Contact section missing socialLinks array');
      process.exit(1);
    }
    
    console.log('✅ Basic structure validation passed');
    
    // Count items
    console.log(`📊 Portfolio contains:`);
    console.log(`   - ${data.skills.list.length} skills`);
    console.log(`   - ${data.projects.list.length} projects`);
    console.log(`   - ${data.contact.socialLinks.length} social links`);
    
    // Check for featured projects
    const featuredProjects = data.projects.list.filter(p => p.featured);
    console.log(`   - ${featuredProjects.length} featured projects`);
    
    console.log('\n🎉 Portfolio data validation completed successfully!');
    
  } catch (error) {
    if (error instanceof SyntaxError) {
      console.error('❌ JSON syntax error:', error.message);
      console.error('Please check your portfolio-data.json file for syntax errors');
    } else {
      console.error('❌ Validation error:', error.message);
    }
    process.exit(1);
  }
}

// Run validation if this script is executed directly
validatePortfolioData(); 