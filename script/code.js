let person = [
    {
        firstName: 'Siyamthanda',
        lastName: 'Mazokwana',
        age: '24'
    },
    {
        firstName:'Alonso',
        lastName:'Cupido',
        age:'19'
    },
    {
        firstName: 'Amy',
        lastName: 'Pieterse',
        age: '23'
    },
    {
        firstName: 'Keeno',
        lastName: 'Fourie',
        age: '19'
    },
    {
        firstName: 'Jason',
        lastName: 'Baron',
        age: '16'
    },
    {
        firstName: 'Logan',
        lastName: 'Thomas',
        age: '21'
    },
    {
        firstName: 'Jason',
        lastName: 'Viljeon',
        age: '25'
    },
    {
        firstName: 'Mish-Al',
        lastName: 'Taliep',
        age: '21'
    },
    {
        firstName: 'Thotyelwa',
        lastName: 'Mpongwana',
        age: '22'
    },
]
console.log(person)


// Question 2/3.
let person1={
    firstName: 'Siyamthanda',
    lastName: 'Mazokwana',
    age: '24'
}
let person2={
    firstName: 'Mish-Al',
    lastName: 'Taliep',
    age: '21'
}
let person3={
    firstName: 'Jason',
    lastName: 'Viljeon',
    age: '25'
}
let person4= {
    firstName: 'Logan',
    lastName: 'Thomas',
    age: '21'
}
let person5 = {
    firstName:'Alonso',
    lastName:'Cupido',
    age:'19'
}
let person6 = {
    firstName: 'Jason',
    lastName: 'Baron',
    age: '16'
}
let person7 = {
    firstName: 'Amy',
    lastName: 'Pieterse',
    age: '23'
}
let person8 = {
    firstName: 'Keeno',
    lastName: 'Fourie',
    age: '19'
}
let person9 = {
    firstName: 'Thotyelwa',
    lastName: 'Mpongwana',
    age: '22'
}
const displayElement = document.querySelector('#tableInfo')
console.log(displayElement);
displayElement.innerHTML += `
<tr>
    <td>${person1.firstName}</td>
    <td>${person1.lastName}</td>
    <td>${person1.age}</td>
</tr>
<tr>
<td>${person2.firstName}</td>
<td>${person2.lastName}</td>
<td>${person2.age}</td>
</tr>
<tr>
    <td>${person3.firstName}</td>
    <td>${person3.lastName}</td>
    <td>${person3.age}</td>
</tr>
<tr>
    <td>${person4.firstName}</td>
    <td>${person4.lastName}</td>
    <td>${person4.age}</td>
</tr>
<tr>
    <td>${person5.firstName}</td>
    <td>${person5.lastName}</td>
    <td>${person5.age}</td>
</tr>
<tr>
    <td>${person6.firstName}</td>
    <td>${person6.lastName}</td>
    <td>${person6.age}</td>
</tr>
<tr>
    <td>${person7.firstName}</td>
    <td>${person7.lastName}</td>
    <td>${person7.age}</td>
</tr>
<tr>
    <td>${person8.firstName}</td>
    <td>${person8.lastName}</td>
    <td>${person8.age}</td>
</tr>
<tr>
    <td>${person9.firstName}</td>
    <td>${person9.lastName}</td>
    <td>${person9.age}</td>
</tr>
`

