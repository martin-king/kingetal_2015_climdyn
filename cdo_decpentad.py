years=range(1980,2014)

for y in years:
 print "cdo -O timselmean,5 -delday,31 -selsmon,05  hgt."+str(y)+".nc hgt_may_pentad_"+str(y)+".nc"
