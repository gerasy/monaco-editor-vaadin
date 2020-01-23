package com.packagename.myapp;

import com.vaadin.flow.component.AbstractSinglePropertyField;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.dependency.NpmPackage;
import com.vaadin.flow.component.polymertemplate.EventHandler;


import java.util.function.Consumer;

@Tag("monaco-element")
//doesn't work properly - doesnt install dependencies, no idea why.
//better just run npm -i monaco-editor --save
//@NpmPackage(value = "monaco-editor", version = "0.19.3")
//@NpmPackage(value = "monaco-editor-webpack-plugin", version = "1.8.2")
@JsModule("./src/monaco-element.js")
public class MonacoElement extends AbstractSinglePropertyField<MonacoElement,String> {
    public MonacoElement() {
        super("value","",false);
        setId("xeditor");
        getElement().getStyle().set("height", "100%");
        getElement().getStyle().set("width", "100%");

    }
//
//    @EventHandler
//    public void handleEvent(){
//        System.out.println("something has changed!");
//    }
//    @Override
//    public void setValue(String value) {
//        getElement().callJsFunction("setValue", value, 1);
//    }
//
//    public void getValue(Consumer<String> consumer) {
//        getElement().callJsFunction("getValue").then(result -> {
//            consumer.accept(result.toJson());
//        });
//    }
}

