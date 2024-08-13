# set = collection which is unordered, unindexed. No duplicate values

utensils = {'fork', 'spoon', 'knife'}
dishes = {'bowl', 'plate', 'cup'}

# utensils.add('napkin')
# utensils.remove('fork')
# utensils.clear()
# dishes.update(utensils) \\ adiciona um set dentro do outro
# dinner_table = utensils.union(dishes) \\ junta dois sets em um so (nao importa qual vai receber .union)
# utensils.difference(dishes) \\ compara o que os sets tem de diferente
# utensils.intersection(dishes) \\ compara o que os sets tem de comum

for x in dishes:
    print(x)