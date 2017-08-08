leapyears=range(1980,2013,4)

for y in leapyears:
# print "cdo del29feb uwnd."+str(y)+".nc rub.nc"
# print 'ncatted -a calendar,time,o,c,"standard" rub.nc'
# print 'ncatted -a units,time,o,c,"hours since 2-04-27 00:00:00" rub.nc'
 print "cdo seldate,"+str(y)+"0101,"+str(y)+"1230 air."+str(y)+".nc rub.nc"
 print "mv rub.nc air."+str(y)+"_29febdel.nc"
 
