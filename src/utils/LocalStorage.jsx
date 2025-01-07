// const employees = [
//   {
//     "id": 1,
//     "email": "employee1@example.com",
//     "password": "123",
//     "tasks": [
//       {
//         "taskTitle": "Task 1",
//         "taskDescription": "Description for task 1",
//         "taskDate": "2025-01-06",
//         "category": "Development",
//         "active": true,
//         "newTask": true,
//         "completed": false,
//         "failed": false
//       },
//       {
//         "taskTitle": "Task 2",
//         "taskDescription": "Description for task 2",
//         "taskDate": "2025-01-07",
//         "category": "Testing",
//         "active": true,
//         "newTask": false,
//         "completed": true,
//         "failed": false
//       },
//       {
//         "taskTitle": "Task 3",
//         "taskDescription": "Description for task 3",
//         "taskDate": "2025-01-10",
//         "category": "Design",
//         "active": false,
//         "newTask": false,
//         "completed": false,
//         "failed": true
//       }
//     ]
//   },
//   {
//     "id": 2,
//     "email": "employee2@example.com",
//     "password": "123",
//     "tasks": [
//       {
//         "taskTitle": "Task A",
//         "taskDescription": "Description for task A",
//         "taskDate": "2025-01-05",
//         "category": "Research",
//         "active": true,
//         "newTask": true,
//         "completed": false,
//         "failed": false
//       },
//       {
//         "taskTitle": "Task B",
//         "taskDescription": "Description for task B",
//         "taskDate": "2025-01-08",
//         "category": "Documentation",
//         "active": false,
//         "newTask": false,
//         "completed": true,
//         "failed": false
//       }
//     ]
//   },
//   {
//     "id": 3,
//     "email": "employee3@example.com",
//     "password": "123",
//     "tasks": [
//       {
//         "taskTitle": "Task X",
//         "taskDescription": "Description for task X",
//         "taskDate": "2025-01-06",
//         "category": "Client Support",
//         "active": true,
//         "newTask": true,
//         "completed": false,
//         "failed": false
//       },
//       {
//         "taskTitle": "Task Y",
//         "taskDescription": "Description for task Y",
//         "taskDate": "2025-01-07",
//         "category": "Marketing",
//         "active": true,
//         "newTask": false,
//         "completed": false,
//         "failed": true
//       },
//       {
//         "taskTitle": "Task Z",
//         "taskDescription": "Description for task Z",
//         "taskDate": "2025-01-10",
//         "category": "Sales",
//         "active": true,
//         "newTask": false,
//         "completed": true,
//         "failed": false
//       },
//       {
//         "taskTitle": "Task W",
//         "taskDescription": "Description for task W",
//         "taskDate": "2025-01-12",
//         "category": "Development",
//         "active": false,
//         "newTask": false,
//         "completed": false,
//         "failed": true
//       }
//     ]
//   },
//   {
//     "id": 4,
//     "email": "employee4@example.com",
//     "password": "123",
//     "tasks": [
//       {
//         "taskTitle": "Task M",
//         "taskDescription": "Description for task M",
//         "taskDate": "2025-01-05",
//         "category": "Maintenance",
//         "active": true,
//         "newTask": true,
//         "completed": false,
//         "failed": false
//       },
//       {
//         "taskTitle": "Task N",
//         "taskDescription": "Description for task N",
//         "taskDate": "2025-01-06",
//         "category": "Testing",
//         "active": false,
//         "newTask": false,
//         "completed": true,
//         "failed": false
//       },
//       {
//         "taskTitle": "Task O",
//         "taskDescription": "Description for task O",
//         "taskDate": "2025-01-07",
//         "category": "Development",
//         "active": true,
//         "newTask": false,
//         "completed": true,
//         "failed": false
//       }
//     ]
//   },
//   {
//     "id": 5,
//     "email": "employee5@example.com",
//     "password": "123",
//     "tasks": [
//       {
//         "taskTitle": "Task Q",
//         "taskDescription": "Description for task Q",
//         "taskDate": "2025-01-04",
//         "category": "Research",
//         "active": true,
//         "newTask": true,
//         "completed": false,
//         "failed": false
//       },
//       {
//         "taskTitle": "Task R",
//         "taskDescription": "Description for task R",
//         "taskDate": "2025-01-08",
//         "category": "Development",
//         "active": false,
//         "newTask": false,
//         "completed": false,
//         "failed": true
//       },
//       {
//         "taskTitle": "Task S",
//         "taskDescription": "Description for task S",
//         "taskDate": "2025-01-10",
//         "category": "Documentation",
//         "active": true,
//         "newTask": true,
//         "completed": false,
//         "failed": false
//       },
//       {
//         "taskTitle": "Task T",
//         "taskDescription": "Description for task T",
//         "taskDate": "2025-01-12",
//         "category": "Marketing",
//         "active": true,
//         "newTask": false,
//         "completed": false,
//         "failed": true
//       }
//     ]
//   }
// ];

const employees = [
  {
    "id": 1,
    "name": "Amit",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Task 1",
        "taskDescription": "Description for task 1",
        "taskDate": "2025-01-06",
        "category": "Development",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Task 2",
        "taskDescription": "Description for task 2",
        "taskDate": "2025-01-07",
        "category": "Testing",
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Task 3",
        "taskDescription": "Description for task 3",
        "taskDate": "2025-01-10",
        "category": "Design",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ],
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 2,
    "name": "Priya",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Task A",
        "taskDescription": "Description for task A",
        "taskDate": "2025-01-05",
        "category": "Research",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Task B",
        "taskDescription": "Description for task B",
        "taskDate": "2025-01-08",
        "category": "Documentation",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 3,
    "name": "Ravi",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Task X",
        "taskDescription": "Description for task X",
        "taskDate": "2025-01-06",
        "category": "Client Support",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Task Y",
        "taskDescription": "Description for task Y",
        "taskDate": "2025-01-07",
        "category": "Marketing",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "taskTitle": "Task Z",
        "taskDescription": "Description for task Z",
        "taskDate": "2025-01-10",
        "category": "Sales",
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Task W",
        "taskDescription": "Description for task W",
        "taskDate": "2025-01-12",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ],
    "taskCounts": {
      "active": 3,
      "newTask": 2,
      "completed": 2,
      "failed": 2
    }
  },
  {
    "id": 4,
    "name": "Neha",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Task M",
        "taskDescription": "Description for task M",
        "taskDate": "2025-01-05",
        "category": "Maintenance",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Task N",
        "taskDescription": "Description for task N",
        "taskDate": "2025-01-06",
        "category": "Testing",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Task O",
        "taskDescription": "Description for task O",
        "taskDate": "2025-01-07",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 2,
      "failed": 0
    }
  },
  {
    "id": 5,
    "name": "Sita",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Task Q",
        "taskDescription": "Description for task Q",
        "taskDate": "2025-01-04",
        "category": "Research",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Task R",
        "taskDescription": "Description for task R",
        "taskDate": "2025-01-08",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "taskTitle": "Task S",
        "taskDescription": "Description for task S",
        "taskDate": "2025-01-10",
        "category": "Documentation",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Task T",
        "taskDescription": "Description for task T",
        "taskDate": "2025-01-12",
        "category": "Marketing",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ],
    "taskCounts": {
      "active": 3,
      "newTask": 2,
      "completed": 1,
      "failed": 2
    }
  }
];


const admin = [{
    "id": 6,
    "email": "admin@example.com",
    "password": "123"
}];


export const setLocalStorage = () =>{
    
  localStorage.setItem('employees',JSON.stringify(employees))
  localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage = () =>{
 const employees = JSON.parse(localStorage.getItem('employees'))
 const admin = JSON.parse(localStorage.getItem('admin'))

 console.log('emp & admin---',employees,admin)

 return {employees,admin}
}
