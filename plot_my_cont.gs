function xxx(args)

var=subwrd(args,1)

*I also used this script to plot zonal mean u in Fig. 9 of King et al 2015 Clim Dyn. 
*See the part 
*'set xlopts 1 5 0.20'
*'set ylopts 1 5 0.15'
*'set ylevs 925 700 500 300 100 20'
*'set xlint 10'
*below.

'reset'
*for global landscape
'set vpage 0. 11. 0. 5'
*'set vpage 0. 11 0. 6.5'
*'set mpdset mres'
*'/Users/martinpking/work_8jul2011.dir/from_martin_king_scratch/scripts/polst 50 n'
'set mpdraw on'
'set rgb 17 90 90 90'
'set map 17 1 6'
'set lat -60 60'
*'set lon 5 355'
'set ylint 30'
'set xlint 60'
'set xlopts 1 6 0.23'
'set ylopts 1 6 0.23'
'set grid on 5 1'
*'set frame on'
'set grads off'
'set display color white'
'run /Users/martinpking/work_8jul2011.dir/from_martin_king_scratch/some_grads_scripts.dir/scripts/rgbset.gs'


*'set vpage 0.2 10.5 0.2 6'
'set gxout shaded'
* water vapour flux 'set clevs 50 100 150 200 300 400 500'
* water vapour flux 'set ccols 0  42  43  44   45  46 47 48 49'
* water vapour flux div 'set clevs -12 -8 -4 -2 2 4 6 8 '
* water vapour flux div 'set ccols  49 46 43 41 0  61 63 65 67 '
* press ann dev'set clevs -3 -2 -1 1 2 4 6 8 '
* press ann dev'set ccols  47 45 43 0 61 63 65 67 69'
* TAS JJAS 'set clevs -60 -40 -20 -5 5 20 40 60'
*'set clevs -40 -30 -20 -10 10 20 30 40'
*'set clevs -7 -5 -3 -0.1 0.1 3 5 7'
* TAS JJAS 'set ccols  49 47 45 43  0  23 25 27 28 '
*'set ccols  28 27 25 23  0  43 45 47 49 '
* TAS DJFM 'set clevs -15 -10 -8 -6 -4 -2 2 4 6'
* TAS DJFM 'set ccols   49 47 45 43 42 41 0 21 22 23 25'
* general red and blue 
*
'set clevs  -10. -5 -2  2 5 10 15 20 '
* general red and blue 'set ccols  46 44 42 0 62 64 66 67 68'
'set ccols  47 45 43  0  23 25 27 28 29 '
*'set clevs -1 1'
*'set ccols 43 0 62'
*'set clevs -6 -4 -2 -1 1 2 4 6  '
*'set ccols  49 46 43 42 0  62 63 66 69 '


*'set xlopts 1 5 0.20'
*'set ylopts 1 5 0.15'
*'set ylevs 925 700 500 300 100 20'
*'set xlint 10'
*'set ylint 200'
*'set lat -90 90'
*'set lon 0 360'
*'set lat -30 60'
*'set lon 0 360

*'set grads off'
'd 'var 

*'draw title '
*'set strsiz .3'
*'set string 1 l 3'
*for tropical channel 'draw string 0.9 3.8 GPCP DJF 1999-2004 Precip (mm/day)'
*'draw string 0.9 4.5 GPCP: Dec 1979-2010 Precip (mm/day)'
*'draw title JJAS: simp. cont. mounts, zonal sst, uv850 & div'
*'draw title NOV: Diabatic heating at sigma=0.5; 1e-5 K/sec'
*'run /Users/martinpking/work_8jul2011.dir/from_martin_king_scratch/some_grads_scripts.dir/scripts/cbar.gs 1.2 0 5.5 0.5'
*'run /Users/martinpking/work_8jul2011.dir/from_martin_king_scratch/some_grads_scripts.dir/scripts/cbar.gs 1.2 1 9.6 3.6'
'run /Users/martinpking/work_8jul2011.dir/from_martin_king_scratch/some_grads_scripts.dir/scripts/cbar.gs 1. 1. 10.1 2.5'
* cbar.gs sf vert xmid ymid

*'set gxout contour'
*'set clab off'
*'set cint 0.5'
*'set cmax 0'
*'set ccolor 1'
***'set clevs -5 -10 -15 -20 -25 -30 -35 -40 -45 -50 -55 -60'
***'set clevs -0.1 -0.2'
*'set clopts -1 -1 0.15'
*'set clskip 2'
*'set cstyle 2'
*'set cthick 5'
*'d ave(slpc,t=6,t=9)-1013'
*'d 'var
*'set cint 0.5'
*'set cmin 0'
*'set cstyle 1'
*'set ccolor 1'
**'set clevs 5 10 15 20 25 30 35 40 45 50 55 60 65'
**'set clevs 0.2 0.4 0.6 0.8 1.0 1.2 1.4'
*'d ave(slpc,t=6,t=9)-1013'
*'d 'var
*'set clab on'
*'set clevs 0'
*'set ccolor 1'
*'set cstyle 1'
*'set grads off'
*'set mpdraw off'
*'set cthick 6'
*'d ave(slpc,t=6,t=9)-1013'


return
