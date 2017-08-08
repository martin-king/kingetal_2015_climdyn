function xxx(args)

var1=subwrd(args,1)
var2=subwrd(args,2)

*'reset'
*'set grid off'
'set gxout vector'
*'set grid off'
'set vpage 0. 11 0. 5.'
'set mpdraw on'
'set rgb 17 90 90 90'
'set map 17 1 6'
'set ylint 30'
'set xlint 60'
'set display color white'
*'set map 17 1 6'

'set grads off'
'set xlopts 1 6 0.23'
'set ylopts 1 6 0.23'
'set lat -60 60'
*'set lon 0 180'

len=0.5
scale=300
*xrit = 7.0
ybot = 4.6
xrit = 9.4
*ybot = 1.2

*set arrscl ref_length magnitude
'set arrscl 'len' 'scale

*turn arrow label on
'set arrlab off' 
'set arrowhead 0.09' 

*display every other grid cell
*skip(u,skip factor in x dir, skip factor in y dir)
*'set strsiz .3'
*'set string 1 l 7'
*'draw string 1.9 6.2 Apr Clim. Water Vapour Flux'
*'draw title d) JAN: R[SICDX;SICDY,tSIC]'
'set ccolor 1'
'set cthick 5'
*'vv1=maskout('var1',-mag('var1','var2')+200)'
*'vv2=maskout('var2',-mag('var1','var2')+200)'
*'v1=maskout('var1',mag('var1','var2')-2)'
*'v2=maskout('var2',mag('var1','var2')-2)'


*'d v1;v2'
'd skip('var1',5,5);'var2

rc = arrow(xrit-0.25,ybot+0.2,len,scale)

function arrow(x,y,len,scale)
'set line 1 1 4'
'draw line 'x-len/2.' 'y' 'x+len/2.' 'y
'draw line 'x+len/2.-0.1' 'y+0.05' 'x+len/2.' 'y
'draw line 'x+len/2.-0.1' 'y-0.05' 'x+len/2.' 'y
'set string 1 c'
'set strsiz 0.2'
'draw string 'x' 'y-0.3' 'scale 'kg/ms'

return
