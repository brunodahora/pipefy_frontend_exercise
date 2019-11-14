export const ShortTextField = {
  id: 'your_name',
  label: 'Your name',
  __typename: 'ShortTextField',
};

export const LongTextField = {
  id: 'your_bio',
  label: 'Your Bio',
  __typename: 'LongTextField',
};

export const SelectField = {
  id: 'primary_skill',
  label: 'Primary Skill',
  options: [
    'Structured Programming',
    'Object-oriented Programming',
    'Functional Programming',
  ],
  __typename: 'SelectField',
};

export const RadioVerticalField = {
  id: 'javascript_library_of_choice',
  label: 'Javascript library of choice',
  options: ['React', 'Angular', 'Vue'],
  __typename: 'RadioVerticalField',
};

export const ChecklistVerticalField = {
  id: 'additional_experience',
  label: 'Additional Experience',
  options: ['TDD', 'Heroku', 'Github'],
  __typename: 'ChecklistVerticalField',
};

export const DateField = {
  id: 'start_date',
  label: 'Start Date',
  __typename: 'DateField',
};

export const data = {
  publicForm: {
    publicFormSettings: {
      organizationName: 'Pipefy Recruitment Test',
      submitButtonText: 'Submit',
      title: 'Recruitment Survey',
      __typename: 'PublicFormSettings',
    },
    formFields: [
      ShortTextField,
      LongTextField,
      SelectField,
      RadioVerticalField,
      ChecklistVerticalField,
      DateField,
    ],
    __typename: 'PublicForm',
  },
};
