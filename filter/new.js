const pays = [
    { employee: 'Jack Simmon', income: 130000 },
    { employee: 'Linda Furnace', income: 520000 },
    { employee: 'Simp Simson', income: 70000 },
    { employee: 'Mesa Gradcost', income: 200000 },
    { employee: 'Alina Haldel', income: 120000 },
    { employee: 'Jonny Cash', income: 40000 }
]

const wellPaid = pays.filter(salary => salary.income >= 100000)
console.log(wellPaid)