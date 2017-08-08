function xsea(args)

ibatch=subwrd(args,1)

year=1979
yearend=2013

while (year<=yearend)

say year

'sdfopen air.'year'_10daylowpass.nc'
'sdfopen vwnd.'year'_10daylowpass.nc'
*
'set z 1 17'
'set x 1 144'
*running out of memory with full globe
'set y 35 73'
'set t 1 365'
*'metr=cos(lat*3.1416/180)'
*'r0=6.37e6'
*'f0=2.0*7.292e-5*sin(lat*3.1416/180.0)'
'ptstar=(air.1-ave(air.1,lon=0,lon=360))*pow(1000/lev(z+0),0.286)'
'vstar=vwnd.2-ave(vwnd.2,lon=0,lon=360)'

'vstarptstarzm=ave(vstar*ptstar,lon=0,lon=360)'
'ptzm=ave(air.1*pow(1000/lev(z+0),0.286),lon=0,lon=360)'

*to calculate dptzm/dp term
'set z 2 16'
'set x 1 144'
'set y 35 73'
'set t 1 365'
'dp1=(lev(z-1)-lev(z+0))'
'dp2=(lev(z+0)-lev(z+1))'
'dp12=dp1+dp2'
'w1=dp2/dp12'
'w2=dp1/dp12'
'dptzmdp=w1*((ptzm(z-1)-ptzm(z+0))/dp1*0.01)+w2*((ptzm(z+0)-ptzm(z+1))/dp2*0.01)'

'epfluxz=2.*3.1416/9.81*2.*7.292e-5*sin(lat*3.1416/180.)*pow(6.37e6,3)*pow(cos(lat*3.1416/180),2)*vstarptstarzm/dptzmdp'
'set sdfwrite -flt ncep_epfluxz_'year'_10daylowpass.nc'
'sdfwrite epfluxz'

year=year+1

'reinit'

endwhile

if (ibatch='b')
 'quit'
endif

return
