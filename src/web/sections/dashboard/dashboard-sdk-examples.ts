export interface DashboardSdkExamples {
  readonly apiKey: string;
  readonly npmInstall: string;
  readonly pipInstall: string;
  readonly goInstall: string;
  readonly composerInstall: string;
  readonly gemInstall: string;
  readonly mavenInstall: string;
  readonly dotnetInstall: string;
  readonly curlExample: string;
  readonly nodeExample: string;
  readonly fetchExample: string;
  readonly pythonExample: string;
  readonly goExample: string;
  readonly phpExample: string;
  readonly rubyExample: string;
  readonly javaExample: string;
  readonly csharpExample: string;
}

export function buildDashboardSdkExamples(): DashboardSdkExamples {
  const apiKey = 'rt_live_your_api_key';
  const apiBaseUrl = 'https://telvrisecurity.vercel.app';
  const npmInstall = 'npm install @telvri/security';
  const pipInstall = 'pip install telvri-security';
  const goInstall = 'go get github.com/Granville-Christopher/telvri-go@v1.0.0';
  const composerInstall = 'composer require telvri/security';
  const gemInstall = 'gem install telvri_security';
  const mavenInstall =
    "implementation 'com.github.Granville-Christopher:telvri-java:v1.0.0'";
  const dotnetInstall = 'dotnet add package Telvri.Security --version 1.0.0';
  const curlExample = `curl -X POST ${apiBaseUrl}/v1/security/sim-check \\
  -H "Content-Type: application/json" \\
  -H "X-API-Key: ${apiKey}" \\
  -d '{"phoneNumber":"+2348031234569","maxAgeHours":24}'`;
  const nodeExample = `import { Configuration, SIMSwapIntelligenceApi } from '@telvri/security';

const config = new Configuration({
  basePath: '${apiBaseUrl}',
  apiKey: process.env.TELVRI_API_KEY,
});

const api = new SIMSwapIntelligenceApi(config);

const result = await api.simSwapControllerCheckSimSwap({
  checkSimSwapDto: {
    phoneNumber: '+2348031234569',
    maxAgeHours: 24,
  },
});

console.log(result);`;
  const fetchExample = `const response = await fetch('${apiBaseUrl}/v1/security/sim-check', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-API-Key': process.env.TELVRI_API_KEY,
  },
  body: JSON.stringify({
    phoneNumber: '+2348031234569',
    maxAgeHours: 24,
  }),
});

const result = await response.json();
console.log(result);`;
  const pythonExample = `import os
import telvri_security
from telvri_security.models.check_sim_swap_dto import CheckSimSwapDto

config = telvri_security.Configuration(host="${apiBaseUrl}")
config.api_key["X-API-Key"] = os.environ["TELVRI_API_KEY"]

with telvri_security.ApiClient(config) as client:
    api = telvri_security.SIMSwapIntelligenceApi(client)

    result = api.sim_swap_controller_check_sim_swap(
        CheckSimSwapDto(phoneNumber="+2348031234569", maxAgeHours=24),
    )

    print(result)`;
  const goExample = `package main

import (
	"context"
	"fmt"
	"os"

	telvri "github.com/Granville-Christopher/telvri-go"
)

func main() {
	cfg := telvri.NewConfiguration()
	cfg.AddDefaultHeader("X-API-Key", os.Getenv("TELVRI_API_KEY"))

	client := telvri.NewAPIClient(cfg)
	dto := telvri.NewCheckSimSwapDto("+2348031234569")

	result, response, err := client.SIMSwapIntelligenceAPI.
		SimSwapControllerCheckSimSwap(context.Background()).
		CheckSimSwapDto(*dto).
		Execute()
	if err != nil {
		panic(err)
	}
	defer response.Body.Close()

	fmt.Printf("swapped=%v provider=%s\\n", result.GetSwapped(), result.GetProvider())
}`;
  const phpExample = `<?php

$payload = json_encode([
    'phoneNumber' => '+2348031234569',
    'maxAgeHours' => 24,
]);

$ch = curl_init('${apiBaseUrl}/v1/security/sim-check');
curl_setopt_array($ch, [
    CURLOPT_POST => true,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => [
        'Content-Type: application/json',
        'X-API-Key: ' . getenv('TELVRI_API_KEY'),
    ],
    CURLOPT_POSTFIELDS => $payload,
]);

echo curl_exec($ch);
curl_close($ch);`;
  const rubyExample = `require 'json'
require 'net/http'
require 'uri'

uri = URI('${apiBaseUrl}/v1/security/sim-check')
request = Net::HTTP::Post.new(uri)
request['Content-Type'] = 'application/json'
request['X-API-Key'] = ENV.fetch('TELVRI_API_KEY')
request.body = {
  phoneNumber: '+2348031234569',
  maxAgeHours: 24
}.to_json

response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |http|
  http.request(request)
end

puts response.body`;
  const javaExample = `import java.math.BigDecimal;
import com.telvri.security.api.SimSwapIntelligenceApi;
import com.telvri.security.model.CheckSimSwapDto;
import com.telvri.security.model.SimSwapResponseDto;

SimSwapIntelligenceApi api = new SimSwapIntelligenceApi();

CheckSimSwapDto body = new CheckSimSwapDto()
    .phoneNumber("+2348031234569")
    .maxAgeHours(BigDecimal.valueOf(24));

SimSwapResponseDto result = api.simSwapControllerCheckSimSwap(
    body,
    System.getenv("TELVRI_API_KEY")
);

System.out.println(result.getSwapped() + " " + result.getProvider());`;
  const csharpExample = `using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Telvri.Security.Api;
using Telvri.Security.Client;
using Telvri.Security.Extensions;
using Telvri.Security.Model;

var host = Host.CreateDefaultBuilder(args)
    .ConfigureApi((_, _, options) =>
    {
        options.AddTokens(new ApiKeyToken(
            Environment.GetEnvironmentVariable("TELVRI_API_KEY")!,
            ClientUtils.ApiKeyHeader.X_API_Key,
            prefix: string.Empty));
        options.AddApiHttpClients();
    })
    .Build();

var api = host.Services.GetRequiredService<ISIMSwapIntelligenceApi>();
var response = await api.SimSwapControllerCheckSimSwapAsync(
    new CheckSimSwapDto("+2348031234569"));
var result = response.Ok();
Console.WriteLine(result?.Swapped + " " + result?.Provider);`;

  return {
    apiKey,
    npmInstall,
    pipInstall,
    goInstall,
    composerInstall,
    gemInstall,
    mavenInstall,
    dotnetInstall,
    curlExample,
    nodeExample,
    fetchExample,
    pythonExample,
    goExample,
    phpExample,
    rubyExample,
    javaExample,
    csharpExample,
  };
}
