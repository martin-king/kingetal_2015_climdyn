function x

'reset'
tmax=204
zmax=17
tstart=1

while (tstart<=6)
t=tstart
'set fwrite -le -st ncep_natl_pentad'tstart+48'_1979_2012.dat'
'set gxout fwrite'

while (t<=tmax)
  'set t 't
  z=1
  while (z<=zmax)
   'set z 'z
*nam   'annmod=aave(hgt,lon=0,lon=360,lat=40,lat=60)-aave(hgt,lon=0,lon=360,lat=70,lat=90)'
    'natl=aave(hgt,lon=-60,lon=30,lat=30,lat=50)-aave(hgt,lon=-60,lon=30,lat=60,lat=80)'
*polarair   'annmod=aave(air,lon=0,lon=360,lat=70,lat=87)'
*   'land=aave(hgt,lon=0,lon=120,lat=40,lat=70)+aave(hgt,lon=240,lon=285,lat=40,lat=70)'
*   'sea=aave(hgt,lon=-60,lon=0,lat=40,lat=87)+aave(hgt,lon=150,lon=240,lat=40,lat=87)'
*   'd land-sea'
   'd natl'
   z=z+1
  endwhile
  t=t+6
endwhile
'disable fwrite'

tstart=tstart+1
endwhile

return
