function reg(args)

*ts is starting timestep and te is end timestep
ts=subwrd(args,1)
te=subwrd(args,2)
ts1=ts+2
te1=te-2
'reset'
'/Users/martinpking/work_8jul2011.dir/from_martin_king_scratch/scripts/polst 30 n'

'set t 'ts' 'te
* Barents sea ice concentration time series
'sicpav=aave(100*sic.1,lon=0,lon=90,lat=75,lat=85)'

'set t 1'
'sicpavm=ave(sicpav,t='ts',t='te')'
'set t 'ts' 'te
'sicanom=sicpav-sicpavm'

*calculating the 5-year running mean of the anomalies.
'set t 'ts1' 'te1
'sicanomfil=ave(sicanom,t-2,t+2)'
'sicanomfiht=sicanom-sicanomfil'
'sicanomfihav=ave(sicanomfiht,t='ts1',t='te1')'
'sicanomfih=sicanomfiht-sicanomfihav'

*this is for sic.3 which can be the same or different to sic.1
'sic32dfil=ave(100*sic.3,t-2,t+2)'
'sic32danomfiht=100*sic.3-sic32dfil'
'sic32danomfih=sic32danomfiht-ave(sic32danomfiht,t='ts1',t='te1')'

*same calculations for zg500
'set t 1'
'zgav2d=ave(zg500.2,t='ts',t='te')'
'set t 'ts' 'te
'zganom2d=zg500.2-zgav2d'

'set t 'ts1' 'te1
'zganom2dfil=ave(zganom2d,t-2,t+2)'
'zganom2dfiht=zganom2d-zganom2dfil'
'zganom2dfih=zganom2dfiht-ave(zganom2dfiht,t='ts1',t='te1')'

*calculating the regression
'cova2d=sicanomfih*zganom2dfih'
'cova2ds3=sicanomfih*sic32danomfih'

'set t 1'
'sicvar=ave(pow(sicanomfih,2),t='ts1',t='te1')'
'zgvar2d=ave(pow(zganom2dfih,2),t='ts1',t='te1')'

'reg2d=ave(cova2d,t='ts1',t='te1')/sqrt(sicvar)'
'reg2ds3=ave(cova2ds3,t='ts1',t='te1')/sqrt(sicvar)'
*for t test
'covvar2d=ave(pow(cova2d/sqrt(sicvar)-reg2d,2),t='ts1',t='te1')'
'tstat2d=abs(ave(cova2d/sqrt(sicvar),t='ts1',t='te1'))/sqrt(covvar2d)*sqrt(30)'

'run /Users/martinpking/work_8jul2011.dir/from_martin_king_scratch/some_grads_scripts.dir/scripts/rgbset.gs'

*plotting significant area in grey
'set grads off'
'set display color white'
'set mpdraw on'
'set rgb 17 100 100 100'
'set map 17 1 6'
'set ylint 20'
'set xlint 30'
'set grid on 5 1'
'set gxout shaded'
'set rgb 16 200 200 200'
'set rbcols 16'
'set cmin 0'
'd tstat2d-1.7'

*plotting the regressions in line contours
'set gxout contour'
'set clab on'
'set cint 5'
'set cmax -5'
*'set ccolor 1'
'set ccolor 49'
*'set clevs -3'
'set clopts -1 -1 0.17'
*'set clskip 2'
'set cstyle 2'
'set cthick 8'
'd reg2d'
'set cint 5'
'set cmin 5'
'set cstyle 1'
*'set ccolor 1'
'set ccolor 29'
*'set clevs 3 6 9 12 15 18 21 24'
'd reg2d'
'set clevs 0'
'set ccolor 1'
'set cstyle 1'
'set grads off'
'set mpdraw off'
'set cthick 8'
'set clopts -1 -1 0.15'
'set clab on'
'd reg2d'


return
