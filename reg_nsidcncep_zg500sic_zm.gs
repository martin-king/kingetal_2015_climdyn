function reg(args)

*file 1 epfluxx
*file 2 epfluxz
*file 3 uwnd
*file 4 sic

ts=subwrd(args,1)
te=subwrd(args,2)
ts1=ts+2
te1=te-2
'reset'
*'/Users/martinpking/work_8jul2011.dir/from_martin_king_scratch/scripts/polst 30 n'
*'/Users/martinpking/work_8jul2011.dir/from_martin_king_scratch/scripts/polst 50 n'
*'set mpvals 120 240 30 90'
*'set lon 120 240'
*'set lat 30 90'
*'set mproj nps'
*'set mpvals -60 90 60 80'
*'set lon -60 90'
*'set lat 60 80'
*'set mproj nps'

*for speedynemo 
*'set t 1 34'
'set dfile 4'
'set z 1'
'set x 1 360'
'set y 1 179'
'set t 'ts' 'te
* Barents seas 
'sicpav=aave(100*sic.4,lon=0,lon=90,lat=75,lat=85)'
*'sicpav=aave(100*sic.4,lon=0,lon=180,lat=75,lat=85)'
*'nam=aave(zg500.1,lon=-180,lon=180,lat=40,lat=60)-aave(zg500.2,lon=-180,lon=180,lat=70,lat=90)'
*'sicpav=aave(sic.1,lon=0,lon=360,lat=-80,lat=-50)'

'set t 1'
'sicpavm=ave(sicpav,t='ts',t='te')'
'set t 'ts' 'te
'sicanom=sicpav-sicpavm'

'set t 'ts1' 'te1
'sicanomfil=ave(sicanom,t-2,t+2)'
'sicanomfiht=sicanom-sicanomfil'
'sicanomfihav=ave(sicanomfiht,t='ts1',t='te1')'
'sicanomfih=sicanomfiht-sicanomfihav'

*'set t 'ts+20' 'te-20
*'namfil=ave(nam,t-20,t+20)'
*'sicfil=ave(sicpav,t-20,t+20)'

'set dfile 1'
'set z 1 15'
'set x 1'
'set y 11 39'
'set t 1'
'zgav2d=ave(zg500.1,t='ts',t='te')'
'zgav2dz=ave(zg500.2,t='ts',t='te')'
'zgav2d3=ave(zg500.3,t='ts',t='te')'
'set t 'ts' 'te
'zganom2d=zg500.1-zgav2d'
'zganom2dz=zg500.2-zgav2dz'
'zganom2d3=zg500.3-zgav2d3'

'set t 'ts1' 'te1
'zganom2dfil=ave(zganom2d,t-2,t+2)'
'zganom2dfiht=zganom2d-zganom2dfil'
'zganom2dfih=zganom2dfiht-ave(zganom2dfiht,t='ts1',t='te1')'
*
'zganom2dfilz=ave(zganom2dz,t-2,t+2)'
'zganom2dfihtz=zganom2dz-zganom2dfilz'
'zganom2dfihz=zganom2dfihtz-ave(zganom2dfihtz,t='ts1',t='te1')'
*
'zganom2dfil3=ave(zganom2d3,t-2,t+2)'
'zganom2dfiht3=zganom2d3-zganom2dfil3'
'zganom2dfih3=zganom2dfiht3-ave(zganom2dfiht3,t='ts1',t='te1')'

'cova2d=sicanomfih(z=1)*zganom2dfih'
'cova2dz=sicanomfih(z=1)*zganom2dfihz'
'cova2d3=sicanomfih(z=1)*zganom2dfih3'
*'cova2ds=sicanomfih*100*sic.1'

'set t 1'
'sicvar=ave(pow(sicanomfih(z=1),2),t='ts1',t='te1')'
'zgvar2d=ave(pow(zganom2dfih,2),t='ts1',t='te1')'
'zgvar2dz=ave(pow(zganom2dfihz,2),t='ts1',t='te1')'

'reg2d=ave(cova2d,t='ts1',t='te1')/sqrt(sicvar)'
'reg2dz=ave(cova2dz,t='ts1',t='te1')/sqrt(sicvar)'
'reg2d3=ave(cova2d3,t='ts1',t='te1')/sqrt(sicvar)'
*'reg2ds=ave(cova2ds,t='ts1',t='te1')/sqrt(sicvar)'
'covvar2d=ave(pow(cova2d/sqrt(sicvar)-reg2d,2),t='ts1',t='te1')'
'tstat2d=abs(ave(cova2d/sqrt(sicvar),t='ts1',t='te1'))/sqrt(covvar2d)*sqrt(30)'


'run /Users/martinpking/work_8jul2011.dir/from_martin_king_scratch/some_grads_scripts.dir/scripts/rgbset.gs'

'set grads off'
'set display color white'
*'set mpdraw on'
*'set rgb 17 100 100 100'
*'set map 17 1 6'
*'set ylint 200'
'set lat 20 90'
'set xlint 10'
'set xlopts 1 6 0.19'
'set ylopts 1 6 0.19'
'set grid off'
*'set grid on 5 1'
*'set gxout shaded'
*'set rgb 16 200 200 200'
*'set rbcols 16'
*'set cmax -0.1'
*'d reg2d'
*'set cmin 0'
*'d tstat2d-1.7'

*'set gxout contour'
'set zlog off'

*'set clab on'
*'set cint 0.2'
*'set cmax -0.2'
*'set ccolor 1'
*'set ccolor 49'
*'set clevs -3'
*'set clopts -1 -1 0.19'
*'set clskip 2'
*'set cstyle 2'
*'set cthick 8'
*'d reg2dz/1e19'
*'set cint 0.2'
*'set cmin 0.2'
*'set cstyle 1'
*'set ccolor 1'
*'set ccolor 29'
*'set clevs 3 6 9 12 15 18 21 24'
*'d reg2dz/1e19'
*'set clevs 0'
*'set ccolor 1'
*'set cstyle 1'
*'set grads off'
*'set mpdraw off'
*'set cthick 8'
*'set clopts -1 -1 0.15'
*'set clab on'
*'d reg2d'

*'run /Volumes/SEAGATE1/stuff_from_ictp_visit_16nov2010.dir/from_martin_king_scratch/scripts/pl_rbth_o reg2d 0.2'

return
