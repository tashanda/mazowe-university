export const applicationPrograms = [
  'Crop Science',
  'Soil Science',
  'Horticulture',
  'Plant Health & Protection',
  'Animal Science',
  'Livestock Production',
  'Agricultural Engineering',
  'Irrigation & Water Management',
  'Agribusiness Management',
  'Agricultural Economics',
  'Food Science & Technology',
  'Rural Enterprise',
  'Agricultural Data Science',
  'Precision Agriculture',
  'Applied AI in Agriculture',
  'Farm Information Systems',
] as const

export const studyLevels = ['ASSOCIATE', 'BACHELORS'] as const

export const studyLevelLabels = {
  ASSOCIATE: 'Associate degree',
  BACHELORS: "Bachelor's degree",
} as const

export const intendedIntakes = ['AUGUST_2027'] as const

export const intendedIntakeLabels = {
  AUGUST_2027: 'August 2027',
} as const

export const applicationStatuses = [
  'SUBMITTED',
  'UNDER_REVIEW',
  'MORE_INFORMATION_REQUIRED',
  'ACCEPTED',
  'REJECTED',
] as const

export const applicationStatusLabels = {
  SUBMITTED: 'Submitted',
  UNDER_REVIEW: 'Under review',
  MORE_INFORMATION_REQUIRED: 'More information required',
  ACCEPTED: 'Accepted',
  REJECTED: 'Rejected',
} as const
