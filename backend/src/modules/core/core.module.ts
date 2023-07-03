import { Global, Module } from '@nestjs/common';
import {
  ActividadesController,
  CarrerasController,
  ConfiguracionesController,
  CronogramasController,
  CursosController,
  DignidadesController,
  JornadasController,
  ListasController,
  ParalelosController,
  PeriodoLectivosController,
  ResultadosController,
  RolesController,
  tipoUsuariosController,
  UsuariosController,
  TipoListasController,
  VotosController,
  EstudiantesController
  
} from '@core/controllers';
import {
  ActividadesService,
  CarrerasService,
  ConfiguracionesService,
 
  CursosService,
  DignidadesService,
  JornadasService,
  ListasService,
  ParalelosService,
  PeriodosService, 
  CronogramasService,
  ResultadosService,
  RolesService,
  TipoListasService,
  UsuariosService,
  TipoUsuariosService,
  VotosService,
  CataloguesService,
  EstudiantesService
} from '@core/services';
import { coreProviders } from '@core/providers';
import { DatabaseModule } from '@database';


@Global()
@Module({
  imports: [DatabaseModule],
  controllers: [
    ActividadesController,
    CarrerasController,
    ConfiguracionesController,
    CronogramasController,
    CursosController,
    DignidadesController,
    JornadasController,
    ListasController,
    ParalelosController,
    PeriodoLectivosController,
    ResultadosController,
    RolesController,
    tipoUsuariosController,
    UsuariosController,
    TipoListasController,
    VotosController,
    EstudiantesController
  ],
  providers: [
    ...coreProviders,
    ActividadesService,
    CarrerasService,
    ConfiguracionesService,
    CursosService,
    DignidadesService,
    JornadasService,
    ListasService,
    ParalelosService,
    PeriodosService,
    CronogramasService,
    ResultadosService,
    RolesService,
    TipoListasService,
    UsuariosService,
    TipoUsuariosService,
    VotosService,
    CataloguesService,
    EstudiantesService

  ],
  exports: [
    ...coreProviders,
    CarrerasService,
    ConfiguracionesService,
    CronogramasService,
    CursosService,
    DignidadesService,
    JornadasService,
    ListasService,
    ParalelosService,
    ResultadosService,
    RolesService,
    TipoListasService,
    UsuariosService,
    TipoUsuariosService,
    VotosService,
    CataloguesService,
    EstudiantesService
  ],
})
export class CoreModule {}
