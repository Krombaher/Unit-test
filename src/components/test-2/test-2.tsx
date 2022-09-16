type StudentType = {
  id: number
  name: string
  age: number
  isActive: boolean
  address: AddressType
  technologies: TechnologiesType[]
}

type CityType = {
  title: string
  contryTitle: string
}

type AddressType = {
  streetTitle: string,
  city: CityType
}
type TechnologiesType = {
  id: number
  title: string
}

const student: StudentType = {
  id: 1,
  name: 'Dimych',
  age: 32,
  isActive: false,

  address: {
    streetTitle: 'Surganova 2',
    city: {
      title: 'Minsk',
      contryTitle: 'Belarus'
    }
  },

  technologies: [
    {id: 1, title: 'HTML'},
    {id: 2, title: 'JS'},
    {id: 3, title: 'React'},
  ]
}

console.log(student.name)
console.log(student.age)
console.log(student.isActive)
console.log(student.address.city.title)
console.log(student.technologies[2].title)