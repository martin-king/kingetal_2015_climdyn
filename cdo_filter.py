#print "module load cdo"
#years=range(1979,2014)
years=range(1980,2014,4)

for y in years:
# print "cdo -b 32 lowpass,36.5  air."+str(y)+".nc air."+str(y)+"_10daylowpass.nc"
#  print "cdo lowpass,36.5 -detrend vwnd."+str(y)+"_29febdel.nc vwnd."+str(y)+"_10daylowpass.nc"
  print "cdo -b 32 lowpass,36.5 air."+str(y)+"_29febdel.nc air."+str(y)+"_10daylowpass.nc"
  
