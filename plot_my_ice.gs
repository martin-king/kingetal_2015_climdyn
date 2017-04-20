function xxx(args)

var=subwrd(args,1)
var2=subwrd(args,2)

*'set vpage 0.2 8.5 0.2 6.5'
*'set mpdset mres'
'/Users/martinpking/work_8jul2011.dir/from_martin_king_scratch/scripts/polst 60 n'
*'set mpvals 150 210 50 80'
*'set lon 150 210'
*'set lat 50 80'
*'set mproj nps'
'set mpdraw on'
'set rgb 17 100 100 100'
'set map 17 1 6'
'set ylint 10'
'set xlint 30'
'set grads off'
'set grid on 5 1'
*'set frame circle'
'set frame on'
'set display color white'
'run /Users/martinpking/work_8jul2011.dir/from_martin_king_scratch/some_grads_scripts.dir/scripts/rgbset.gs'

'set grads off'
*'set vpage 0.2 8.5 0.2 5.8'
'set gxout shaded'
*'set clevs  -10 -5 -2  2 5 10 15 '
*'set ccols   25 24 22  0 43 45 47 49'
'set clevs  -30 -20 -10  10 20 30 40'
'set ccols   25 24 22  0 43 45 47 49'
*'set clevs  -20 -15 -10 -5 -1 1 2 3 4 5'
*'set ccols   47 46 45 44 43 0 25 26 27 28 29'
*'set clevs 5 10 15 20 30'
*'set ccols 0 43 45 47 49 56'
*'set clevs 5 10 15 20 25'
*'set ccols  0 43 45  47 49 57'

*'set xlopts 1 5 0.16'
*'set ylopts 1 5 0.16'
*'set ylint 10'
*'set lat -30 60'
*'set lon 0 200'
*'set lat -30 60'
*'set lon 0 360'

'd 'var 

'set gxout contour'
'set clab on'
*'set clopts -1 -1 0.17'
*'set ccols 77 79 69'
'set ccols 1'
'set cthick 15'
*'set clevs 10 30 50'
'set clevs 10'
'd 'var2

**'draw title '
*'set strsiz .3'
*'set string 1 l 7'
*for tropical channel 'draw string 0.9 3.8 GPCP DJF 1999-2004 Precip (mm/day)'
**'draw string 0.9 4.5 GPCP: Dec 1979-2010 Precip (mm/day)'
*'draw title FEB: R[SIC,tSIC]; R[SST,tSIC,CI=0.1K]'
*'run /Users/martinpking/work_8jul2011.dir/from_martin_king_scratch/some_grads_scripts.dir/scripts/cbar.gs 1.4 0 4.2 1.1'
'run /Users/martinpking/work_8jul2011.dir/from_martin_king_scratch/some_grads_scripts.dir/scripts/cbar.gs 1.2 0 4.2 1.1'
* cbar.gs sf vert xmid ymid

return
