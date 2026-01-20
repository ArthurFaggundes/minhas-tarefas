export enum Priority {
  URGENT = 'Urgent',
  IMPORTANT = 'Important',
  NORMAL = 'Normal'
}

export enum Status {
  PENDING = 'Pending',
  DONE = 'Done'
}

//* Utilize const enums quando a performance é importante: Em alguns casos, quando a performance é uma preocupação, você pode usar const enums em vez de enums regulares. Os const enums são totalmente eliminados durante a compilação, e seus valores são substituídos diretamente no código, resultando em um código mais eficiente.
