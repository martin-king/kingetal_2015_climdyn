function xsea(args)

ibatch=subwrd(args,1)

year=1979
yearend=2013

while (year<=yearend)

say year

'sdfopen air.'year'_10daylowpass.nc'
'sdfopen vwnd.'year'_10daylowpass.nc'
*
*'sdfopen air_mon_'year'.nc'
*'sdfopen vwnd_mon_'year'.nc'

'set z 1 17'
'set x 1 144'
'set y 1 73'
'set t 1 365'

'tstar=air.1-ave(air.1,lon=0,lon=360)'
*'tstarbar=air.3-ave(air.3,lon=0,lon=360)'
*'tstarprime=tstar-tstarbar'
*'ustar=uwnd.1-ave(uwnd.1,lon=0,lon=360)'
*
'vstar=vwnd.2-ave(vwnd.2,lon=0,lon=360)'
*'vstarbar=vwnd.4-ave(vwnd.4,lon=0,lon=360)'
*'vstarprime=vstar-vstarbar'
*
*'vstartstar=(vstarbar*tstarbar)+(vstarbar*tstarprime)+(vstarprime*tstarbar)+(vstarprime*tstarprime)'
'vstartstar=vstar*tstar'
*'ustarvstar=ustar*vstar'
'set sdfwrite -flt ncep_vstartstar_'year'_10daylowpass.nc'
'sdfwrite vstartstar'

year=year+1

'reinit'

endwhile

if (ibatch='b')
 'quit'
endif

return
