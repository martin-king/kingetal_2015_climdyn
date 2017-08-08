function x

'reset'
tmax=204
zmax=22
tstart=1

while (tstart<=6)
say tstart
t=tstart

'set fwrite -le -st erai_polarair_pentad'tstart+12'_1979_2012.dat'
'set gxout fwrite'

while (t<=tmax)
  'set t 't
  z=1
  while (z<=zmax)
   'set z 'z
*   'annmod=aave(z,lon=0,lon=360,lat=30,lat=50)-aave(z,lon=0,lon=360,lat=60,lat=85)'
*   'd annmod/9.80665'
   'annmod=aave(t,lon=0,lon=360,lat=70,lat=88)'
   'd annmod'
   z=z+1
  endwhile
  t=t+6
endwhile
'disable fwrite'

tstart=tstart+1
endwhile

return
