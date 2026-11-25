export type NavSectionId = 'home' | 'about' | 'projects' | 'experience' | 'skills' | 'contact';

export type ProjectCategory = 'all' | 'development' | 'ux-ui' | 'open-source';

export type PageView =
  | 'portfolio'
  | 'huellitas-case-study'
  | 'art-auction-case-study';

export interface ProjectAction {
  label: string;
  icon: string;
  variant: 'primary' | 'secondary' | 'ghost';
  href?: string;
  external?: boolean;
  actionType: 'case-study' | 'external' | 'external-website' | 'modal-preview';
  page?: 'huellitas' | 'art-auction';
}

export interface ProjectItem {
  id: string;
  featured?: boolean;
  badgeLeft: string;
  badgeSecondary?: string;
  categoryLabel: string;
  year?: string;
  title: string;
  description: string;
  architectureSummary: string;
  categories: Exclude<ProjectCategory, 'all'>[];
  tags: string[];
  imageSrc: string;
  imageAlt: string;
  actions: ProjectAction[];
  availabilityNote?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
  dotStyle: 'primary' | 'tertiary' | 'outline';
}

export interface SkillGroup {
  id: string;
  title: string;
  icon: string;
  skills: string[];
  accentChips?: boolean;
  highlighted?: boolean;
  badge?: string;
  description?: string;
}
