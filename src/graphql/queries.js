/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDepartment = /* GraphQL */ `
  query GetDepartment($id: ID!) {
    getDepartment(id: $id) {
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
export const listDepartments = /* GraphQL */ `
  query ListDepartments(
    $filter: ModelDepartmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDepartments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getEmployee = /* GraphQL */ `
  query GetEmployee($id: ID!) {
    getEmployee(id: $id) {
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
export const listEmployees = /* GraphQL */ `
  query ListEmployees(
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmployees(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getInfo = /* GraphQL */ `
  query GetInfo($id: ID!) {
    getInfo(id: $id) {
      id
      text
      createdAt
      updatedAt
    }
  }
`;
export const listInfos = /* GraphQL */ `
  query ListInfos(
    $filter: ModelInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        text
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
