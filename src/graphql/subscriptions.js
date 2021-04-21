/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDepartment = /* GraphQL */ `
  subscription OnCreateDepartment {
    onCreateDepartment {
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
export const onUpdateDepartment = /* GraphQL */ `
  subscription OnUpdateDepartment {
    onUpdateDepartment {
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
export const onDeleteDepartment = /* GraphQL */ `
  subscription OnDeleteDepartment {
    onDeleteDepartment {
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
export const onCreateEmployee = /* GraphQL */ `
  subscription OnCreateEmployee {
    onCreateEmployee {
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
export const onUpdateEmployee = /* GraphQL */ `
  subscription OnUpdateEmployee {
    onUpdateEmployee {
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
export const onDeleteEmployee = /* GraphQL */ `
  subscription OnDeleteEmployee {
    onDeleteEmployee {
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
export const onCreateInfo = /* GraphQL */ `
  subscription OnCreateInfo {
    onCreateInfo {
      id
      text
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateInfo = /* GraphQL */ `
  subscription OnUpdateInfo {
    onUpdateInfo {
      id
      text
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteInfo = /* GraphQL */ `
  subscription OnDeleteInfo {
    onDeleteInfo {
      id
      text
      createdAt
      updatedAt
    }
  }
`;
