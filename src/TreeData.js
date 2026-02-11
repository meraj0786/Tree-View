const data = [
  {
    id: "1",
    code:'A',
    label: "Parent Node",
    collapsed: false,
    note:'',
    children: [
      {
        id: "2",
        code:'B',
        label: "Level A",
        collapsed: false,
        note:'',
        children: [
          {
            id: "3",
            code:'C',
            label: "Level A",
            collapsed: false,
            note:'',
            children: [
              {
                id: "4",
                code:'D',
                label: "Level A",
                collapsed: false,
                note:'',
                children: []
              }
            ]
          }
        ]
      },
      {
        id: "5",
        code:'B',
        label: "Level A",
        collapsed: false,
        note:'',
        children: []
      }
    ]
  }
];

export default data;
