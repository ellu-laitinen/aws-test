/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDepartment = /* GraphQL */ `
  mutation CreateDepartment(
    $input: CreateDepartmentInput!
    $condition: ModelDepartmentConditionInput
  ) {
    createDepartment(input: $input, condition: $condition) {
      id
      name
      manager {
        id
        name
        age
        info {
          id
          text
          createdAt
          updatedAt
        }
        department {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      employees {
        items {
          id
          name
          age
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateDepartment = /* GraphQL */ `
  mutation UpdateDepartment(
    $input: UpdateDepartmentInput!
    $condition: ModelDepartmentConditionInput
  ) {
    updateDepartment(input: $input, condition: $condition) {
      id
      name
      manager {
        id
        name
        age
        info {
          id
          text
          createdAt
          updatedAt
        }
        department {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      employees {
        items {
          id
          name
          age
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteDepartment = /* GraphQL */ `
  mutation DeleteDepartment(
    $input: DeleteDepartmentInput!
    $condition: ModelDepartmentConditionInput
  ) {
    deleteDepartment(input: $input, condition: $condition) {
      id
      name
      manager {
        id
        name
        age
        info {
          id
          text
          createdAt
          updatedAt
        }
        department {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      employees {
        items {
          id
          name
          age
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createEmployee = /* GraphQL */ `
  mutation CreateEmployee(
    $input: CreateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    createEmployee(input: $input, condition: $condition) {
      id
      name
      age
      info {
        id
        text
        createdAt
        updatedAt
      }
      department {
        id
        name
        manager {
          id
          name
          age
          createdAt
          updatedAt
        }
        employees {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateEmployee = /* GraphQL */ `
  mutation UpdateEmployee(
    $input: UpdateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    updateEmployee(input: $input, condition: $condition) {
      id
      name
      age
      info {
        id
        text
        createdAt
        updatedAt
      }
      department {
        id
        name
        manager {
          id
          name
          age
          createdAt
          updatedAt
        }
        employees {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteEmployee = /* GraphQL */ `
  mutation DeleteEmployee(
    $input: DeleteEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    deleteEmployee(input: $input, condition: $condition) {
      id
      name
      age
      info {
        id
        text
        createdAt
        updatedAt
      }
      department {
        id
        name
        manager {
          id
          name
          age
          createdAt
          updatedAt
        }
        employees {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createInfo = /* GraphQL */ `
  mutation CreateInfo(
    $input: CreateInfoInput!
    $condition: ModelInfoConditionInput
  ) {
    createInfo(input: $input, condition: $condition) {
      id
      text
      createdAt
      updatedAt
    }
  }
`;
export const updateInfo = /* GraphQL */ `
  mutation UpdateInfo(
    $input: UpdateInfoInput!
    $condition: ModelInfoConditionInput
  ) {
    updateInfo(input: $input, condition: $condition) {
      id
      text
      createdAt
      updatedAt
    }
  }
`;
export const deleteInfo = /* GraphQL */ `
  mutation DeleteInfo(
    $input: DeleteInfoInput!
    $condition: ModelInfoConditionInput
  ) {
    deleteInfo(input: $input, condition: $condition) {
      id
      text
      createdAt
      updatedAt
    }
  }
`;
