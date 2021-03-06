import { gql } from 'apollo-boost';

export default gql`{
  publicForm(formId: "1lf_E0x4") {
    publicFormSettings {
      organizationName
      submitButtonText
      title
    }

    formFields {
      ...on ShortTextField {
        id
        label
      }
      ...on LongTextField {
        id
        label
      }
      ...on SelectField {
        id
        label
        options
      }
      ...on RadioVerticalField {
        id
        label
        options
      }
      ...on ChecklistVerticalField {
        id
        label
        options
      }
      ...on DateField {
        id
        label
      }
      __typename
    }
  }
}`