import {GlobalProviders, IDIConfigurationOptions, InjectorService, ProviderType} from "@tsed/di";
import {$log} from "ts-log-debug";
import {ServerSettingsService} from "../../config/services/ServerSettingsService";

$log.name = "TSED";
$log.level = "info";

export function createInjector(settings: Partial<IDIConfigurationOptions> = {}) {
  const injector = new InjectorService();

  // Init settings
  injector.settings = createSettingsService(injector);
  injector.logger = $log;

  /* istanbul ignore next */
  if (settings.controllerScope) {
    injector.settings.scopes[ProviderType.CONTROLLER] = settings.controllerScope;
  }

  // @ts-ignore
  injector.settings.set(settings);

  /* istanbul ignore next */
  if (injector.settings.env === "test") {
    injector.logger.stop();
  }

  return injector;
}

function createSettingsService(injector: InjectorService) {
  const provider = GlobalProviders.get(ServerSettingsService)!.clone();

  provider.instance = injector.invoke<ServerSettingsService>(provider.useClass);
  injector.addProvider(ServerSettingsService, provider);

  return provider.instance;
}
