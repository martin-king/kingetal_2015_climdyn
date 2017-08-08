function xsea(args)

ibatch=subwrd(args,1)

year=1979
yearend=2013

while (year<=yearend)

say year

'sdfopen uwnd.'year'_10daylowpass.nc'
'sdfopen vwnd.'year'_10daylowpass.nc'
*
'set z 2 16'
'set x 1 144'
'set y 35 73'
'set t 1 365'
'metr=cos(lat*3.1416/180)'
'r0=6.37e6'
'ustar=uwnd.1-ave(uwnd.1,lon=0,lon=360)'
'vstar=vwnd.2-ave(vwnd.2,lon=0,lon=360)'

'epfluxx=-2*3.1416*pow(r0,2)/9.81*pow(metr,2)*ustar*vstar'
'set sdfwrite -flt ncep_epfluxx_'year'_10daylowpass.nc'
'sdfwrite epfluxx'

year=year+1

'reinit'

endwhile

if (ibatch='b')
 'quit'
endif

return
