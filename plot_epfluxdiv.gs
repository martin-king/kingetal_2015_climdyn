function xxx(args)

var1=subwrd(args,1)
var2=subwrd(args,2)

'set dfile 1'
'set z 1 15'
'set x 1'
'set y 11 39'
'set t 1'
'fz='var2
'flat='var1

'set z 2 14'
*calculate depfluxz
'dp1=lev(z-1)-lev(z+0)'
'dp2=lev(z+0)-lev(z+1)'
'dp12=dp1+dp2'
'w1=dp2/dp12'
'w2=dp1/dp12'
'dfzdp=w1*(fz(z-1)-fz(z+0))/dp1*0.01+w2*(fz(z+0)-fz(z+1))/dp2*0.01'

'dlat=cdiff(lat,y)*3.1416/180'
'dflatdlat=cdiff(flat,y)/dlat'

'diver=dflatdlat+dfzdp'

'set gxout contour'
'set grads off'
'set z 1 15'
'set ylevs 925 700 500 300 100 20'
'set xlint 10'
'set clab off'
'set cint 0.5'
'set cmax -0.5'
'set ccolor 1'
*'set ccolor 49'
*'set clevs -3'
*'set clopts -1 -1 0.19'
*'set clskip 2'
'set cstyle 2'
'set cthick 8'
'd diver/1e14'

'set cint 0.5'
'set cmin 0.5'
'set cstyle 1'
'set ccolor 1'
*'set ccolor 29'
*'set clevs 3 6 9 12 15 18 21 24'
'd diver/1e14'



return

