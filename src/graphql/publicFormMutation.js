import { gql } from 'apollo-boost';

export default gql`
  mutation submitPublicForm($filledFields: [FilledField]!) {
    submitPublicForm(
      input: { formId: "1lf_E0x4", filledFields: $filledFields }
    ) {
      repoItem {
        id
        title
      }
    }
  }
`;
