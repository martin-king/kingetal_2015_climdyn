years=range(1980,2014)

for y in years:
 print "cdo timselmean,5 -selsmon,04  hgt."+str(y)+".nc hgt_apr_pentad_"+str(y)+".nc"
