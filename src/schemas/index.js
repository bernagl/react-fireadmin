export default [
  {
    name: 'Usuarios',
    id: 'usuarios',
    icon: 'user',
    fields: [
      {
        name: 'Nombre',
        key: 'nombre',
        type: 'text',
        error: 'Debes ingresar un nombre válido',
        validations: { minLength: 6, maxLength: 15 },
        max: 30,
        min: 6,
        required: true
      },
      {
        name: 'Apellidos',
        key: 'apellidos',
        type: 'text',
        error: 'Debes ingresar un apellido válido',
        max: 30,
        min: 6,
        required: true
      },
      {
        name: 'Correo',
        key: 'correo',
        type: 'email',
        error: 'Debes ingresar un correo válido',
        max: 30,
        min: 6,
        required: true,
        validations: 'isEmail'
      }
    ]
  },
  {
    name: 'Pedidos',
    id: 'pedidos',
    icon: 'inbox',
    fields: [
      {
        name: 'Nombre',
        type: 'text',
        error: 'Debes ingresar un nombre válido',
        max: 30,
        min: 6,
        required: true
      },
      {
        name: 'Nombre',
        type: 'text',
        error: 'Debes ingresar un nombre válido',
        max: 30,
        min: 6,
        required: true
      }
    ]
  }
]
