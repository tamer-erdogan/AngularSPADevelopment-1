function InstallWebserver{
    import-module servermanager
    add-windowsfeature web-server -includeallsubfeature
}

InstallWebserver