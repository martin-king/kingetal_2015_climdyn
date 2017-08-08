import datetime
#print "module load cdo"
#print "module load nco"
#print "module load ncarg"

years=range(1979,2014)

for y in years:
 for m in range(1,13):
  mm=str(m).zfill(2)
  d=31
  if (m==4) | (m==6) | (m==9) | (m==11):
   d=30
  elif (y%4==0) & (m==2):
   d=29
  elif (m==2):
   d=28
  hh1=(datetime.date(y,m,15)-datetime.date(1948,1,1)).days
  print "cdo -O  monmean -selsmon,"+mm+" ncep_vstartstar_"+str(y)+"_10daylowpass.nc rub.nc"
  print "ncl 'timed="+str(hh1)+"'"+" "+"'"+"file_in="+'"'+"rub.nc"+'"'+"' edit_time.ncl"
  print "ncpdq -O -U rub.nc "+mm+".nc"
# print "ncrcat ??.nc diaheat_mon_"+str(y)+".nc"
 print "cdo -O mergetime ??.nc ncep_vstartstar_mon_"+str(y)+"_10daylowpass.nc"
 print 'ncatted -a units,time,o,c,"days since 1948-01-01" ncep_vstartstar_mon_'+str(y)+"_10daylowpass.nc"
 print "rm -f ??.nc"

#print "cdo -O  mergetime diaheat_mon_????.nc diaheat_mon_1948_2012.nc"
#print "rm -f diaheat_mon_????.nc"
