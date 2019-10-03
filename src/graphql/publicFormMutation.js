import { gql } from 'apollo-boost';

export default gql`
  mutation submitPublicForm($filledFields: [FilledFieldInputGQLType]!) {
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
